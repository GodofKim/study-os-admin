import { PropsWithChildren, createContext, useState } from "react";

type TabsContextState = {
  value: string;
  updateValue: (value: string) => void;
  withIndicator: boolean;
};

export const TabsContext = createContext<TabsContextState | null>(null);

export const TabsProvider = ({
  withIndicator,
  value,
  onChangeValue,
  defaultValue,
  children,
}: PropsWithChildren<{
  withIndicator: boolean;
  value?: string;
  onChangeValue?: (value: string) => void;
  defaultValue?: string;
}>) => {
  const [localValue, setLocalValue] = useState(defaultValue ?? "");

  return (
    <TabsContext.Provider
      value={{
        withIndicator,
        value: value ?? localValue,
        updateValue: (value) => {
          setLocalValue(value);
          onChangeValue?.(value);
        },
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
