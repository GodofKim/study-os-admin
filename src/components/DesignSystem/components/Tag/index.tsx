import { Color, getColor } from "../../types/Color";
import { SpacingProps, convertSpacing } from "../../types/Spacing";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";

type ColorVariants =
  | "Gray"
  | "Blue"
  | "Green"
  | "Orange"
  | "Purple"
  | "Red"
  | "Yellow";

type TypeVariants = "Strong" | "Soft";

export type TagProps = React.HTMLAttributes<HTMLDivElement> &
  SpacingProps & {
    size?: "S" | "M";
    color?: ColorVariants;
    type?: TypeVariants;
    icon?: React.ReactNode;
    customColor?: { bg: Color; text: Color };
  };

export const Tag = ({
  children,
  size = "M",
  color = "Gray",
  type = "Soft",
  icon,
  customColor,
  style,
  ...props
}: TagProps) => {
  const spacing = convertSpacing(props);

  const colorStyles = color
    ? {
        color: getColor(tagColorTypeTokenMap[color][type].text),
        backgroundColor: getColor(tagColorTypeTokenMap[color][type].bg),
      }
    : undefined;

  const customColorStyles = customColor
    ? {
        color: getColor(customColor.bg),
        backgroundColor: getColor(customColor.text),
      }
    : undefined;

  return (
    <div
      className={classNames(styles.wrapper, styles[size])}
      style={{
        ...spacing,
        ...colorStyles,
        ...customColorStyles,
        ...style,
      }}
    >
      {icon ? <div className={styles.icon}>{icon}</div> : null}
      {children}
    </div>
  );
};

const tagColorTypeTokenMap: Record<
  ColorVariants,
  Record<TypeVariants, { text: Color; bg: Color }>
> = {
  Gray: {
    Strong: {
      text: "--Neutral-Colors-Foreground-on-Neutral-Color",
      bg: "--Neutral-Colors-Background-Selectable1",
    },
    Soft: {
      text: "--Neutral-Colors-Foreground-Primary",
      bg: "--Neutral-Colors-Background-Selectable2",
    },
  },
  Blue: {
    Strong: {
      text: "--Accent-Colors-Interactive-Foreground1",
      bg: "--Accent-Colors-Interactive-Background1",
    },
    Soft: {
      text: "--Accent-Colors-Interactive-Foreground2",
      bg: "--Accent-Colors-Interactive-Background2",
    },
  },
  Green: {
    Strong: {
      text: "--Accent-Colors-Success-Foreground1",
      bg: "--Accent-Colors-Success-Background1",
    },
    Soft: {
      text: "--Accent-Colors-Success-Foreground2",
      bg: "--Accent-Colors-Success-Background2",
    },
  },
  Orange: {
    Strong: {
      text: "--Key-Colors-Foreground1",
      bg: "--Key-Colors-Background1",
    },
    Soft: {
      text: "--Key-Colors-Foreground2",
      bg: "--Key-Colors-Background2",
    },
  },
  Purple: {
    Strong: {
      text: "--Accent-Colors-Informative-Foreground1",
      bg: "--Accent-Colors-Informative-Background1",
    },
    Soft: {
      text: "--Accent-Colors-Informative-Foreground2",
      bg: "--Accent-Colors-Informative-Background2",
    },
  },
  Red: {
    Strong: {
      text: "--Accent-Colors-Negative-Foreground1",
      bg: "--Accent-Colors-Negative-Background1",
    },
    Soft: {
      text: "--Accent-Colors-Negative-Foreground2",
      bg: "--Accent-Colors-Negative-Background2",
    },
  },
  Yellow: {
    Strong: {
      text: "--Accent-Colors-Notice-Foreground1",
      bg: "--Accent-Colors-Notice-Background1",
    },
    Soft: {
      text: "--Accent-Colors-Notice-Foreground2",
      bg: "--Accent-Colors-Notice-Background2",
    },
  },
};
