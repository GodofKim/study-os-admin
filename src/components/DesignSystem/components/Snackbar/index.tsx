import {
  CSSProperties,
  ComponentProps,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { TextButton } from "../TextButton";

import providerStyles from "./provider.module.css";
import itemStyles from "./item.module.css";

import { classNames } from "../../utils/classNames";
import { createPortal } from "react-dom";
import { timer } from "../../utils/timer";
import { Text } from "../Text";

const duration = 5000;

const placements = ["top-center", "bottom-center", "bottom-right"] as const;

const SyncHeightContext = createContext<
  null | ((id: Snackbar["id"], height: NonNullable<Snackbar["height"]>) => void)
>(null);

type Snackbar = {
  id: string;
  state: "init" | "visible" | "hidden";
  height?: number;
  properties: {
    type: "default" | "negative";
    placement: (typeof placements)[number];
  };
  content: {
    Icon?: (props: { size: number; className: string }) => ReactNode;
    message: string;
    action?: Omit<ComponentProps<typeof TextButton>, "size" | "variant">;
  };
};

type SnackbarAction =
  | { type: "add"; payload: Omit<Snackbar, "state"> }
  | { type: "show"; payload: Pick<Snackbar, "id"> }
  | { type: "hide"; payload: Pick<Snackbar, "id"> }
  | { type: "remove"; payload: Pick<Snackbar, "id"> }
  | { type: "sync-height"; payload: { id: string; height: number } };

export const SnackbarProvider = () => {
  const [snackbars, dispatch] = useReducer(
    (state: Snackbar[], action: SnackbarAction): Snackbar[] => {
      switch (action.type) {
        case "add":
          return [...state, { ...action.payload, state: "init" }];
        case "show":
          return state.map((snackbar) =>
            snackbar.id === action.payload.id
              ? { ...snackbar, state: "visible" }
              : snackbar
          );
        case "hide":
          return state.map((snackbar) =>
            snackbar.id === action.payload.id
              ? { ...snackbar, state: "hidden" }
              : snackbar
          );
        case "remove":
          return state.filter((snackbar) => snackbar.id !== action.payload.id);
        case "sync-height":
          return state.map((snackbar) =>
            snackbar.id === action.payload.id
              ? { ...snackbar, height: action.payload.height }
              : snackbar
          );
        default:
          return state;
      }
    },
    []
  );

  const internalSnackbar = useMemo(() => {
    const createSnackbar = async (
      snackbar: Pick<Snackbar, "content" | "properties">
    ) => {
      const id = Math.random().toString(36).slice(2);
      dispatch({ type: "add", payload: { id, ...snackbar } });
      await timer(0);
      dispatch({ type: "show", payload: { id } });
      await timer(duration);
      dispatch({ type: "hide", payload: { id } });
      await timer(500);
      dispatch({ type: "remove", payload: { id } });
    };

    const getSnackbarInterface =
      (type: Snackbar["properties"]["type"]): SnackbarInterface =>
      (message, options) => {
        createSnackbar({
          content: { message, ...options },
          properties: { type, placement: options?.placement ?? "top-center" },
        });
      };

    return {
      default: getSnackbarInterface("default"),
      negative: getSnackbarInterface("negative"),
    };
  }, []);

  snackbar.default = internalSnackbar.default;
  snackbar.negative = internalSnackbar.negative;

  const snackbarsByPlacement = snackbars.reduce<
    Record<(typeof placements)[number], Snackbar[]>
  >(
    (acc, snackbar) => ({
      ...acc,
      [snackbar.properties.placement]: [
        ...(acc[snackbar.properties.placement] ?? []),
        snackbar,
      ],
    }),
    { "top-center": [], "bottom-center": [], "bottom-right": [] }
  );

  const syncHeight = useCallback((id: string, height: number) => {
    dispatch({ type: "sync-height", payload: { id, height } });
  }, []);

  return createPortal(
    <SyncHeightContext.Provider value={syncHeight}>
      {placements.map((placement) => (
        <SnackbarList
          key={placement}
          placement={placement}
          className={classNames(
            providerStyles.placementWrapper,
            providerStyles[placement]
          )}
          items={snackbarsByPlacement[placement]}
        />
      ))}
    </SyncHeightContext.Provider>,

    document.body
  );
};

const SnackbarList = ({
  className,
  items,
  placement,
}: {
  className: string;
  items: Snackbar[];
  placement: (typeof placements)[number];
}) => {
  const placementInfoMap: Record<
    (typeof placements)[number],
    { horizontal: "center" | "right"; vertical: "top" | "bottom" }
  > = {
    "top-center": { horizontal: "center", vertical: "top" },
    "bottom-center": { horizontal: "center", vertical: "bottom" },
    "bottom-right": { horizontal: "right", vertical: "bottom" },
  };

  const info = placementInfoMap[placement];

  return (
    <div className={className}>
      {items.map((item, i, arr) => {
        const offsetPx = arr
          .slice(i + 1, arr.length)
          .reduce((acc, snackbar) => acc + (snackbar.height ?? 0) + 8, 0);

        const translateX = info.horizontal === "center" ? "-50%" : "-100%";
        const translateY =
          info.vertical === "top"
            ? `${offsetPx}px`
            : `calc(-100% - ${offsetPx}px)`;

        return (
          <SnackbarItem
            key={item.id}
            snackbar={item}
            style={{ transform: `translate(${translateX}, ${translateY})` }}
          />
        );
      })}
    </div>
  );
};

const SnackbarItem = ({
  snackbar,
  style,
}: {
  snackbar: Snackbar;
  style: Pick<CSSProperties, "transform">;
}) => {
  const syncHeight = useContext(SyncHeightContext);

  if (!syncHeight) throw new Error("SyncHeightContext is not provided");

  const ref = useCallback(
    (el: HTMLDivElement | null) =>
      el && syncHeight(snackbar.id, el.getBoundingClientRect().height),
    [syncHeight, snackbar.id]
  );

  return (
    <div
      className={classNames(
        itemStyles.wrapper,
        itemStyles[snackbar.properties.type],
        itemStyles[snackbar.state]
      )}
      style={style}
      ref={ref}
    >
      <div className={itemStyles.content}>
        {snackbar.content.Icon && (
          <snackbar.content.Icon className={itemStyles.icon} size={20} />
        )}
        <Text
          size="subheadline"
          color="--Neutral-Colors-Foreground-on-Neutral-Color"
          className={itemStyles.message}
        >
          {snackbar.content.message}
        </Text>
      </div>
      {snackbar.content.action && (
        <TextButton {...snackbar.content.action} size="S" variant={"primary"} />
      )}
    </div>
  );
};

type SnackbarInterface = (
  message: Snackbar["content"]["message"],
  options?: {
    Icon?: Snackbar["content"]["Icon"];
    placement?: Snackbar["properties"]["placement"];
    action?: Snackbar["content"]["action"];
  }
) => void;

const warnBeforeInit = () =>
  console.warn(
    "snackbar interface가 등록되지 않았습니다. SnackbarProvider 가 마운트되어 있는지 확인해 주세요."
  );

export const snackbar: {
  default: SnackbarInterface;
  negative: SnackbarInterface;
} = {
  default: warnBeforeInit,
  negative: warnBeforeInit,
};
