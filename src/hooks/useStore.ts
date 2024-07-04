import { useContext } from "react";
import { rootStoreContext } from "../engine/core/store/stores/RootStore/RootStoreContext";

export const useRootStore = () => {
  const rootStore = useContext(rootStoreContext);

  if (!rootStore) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }

  return rootStore;
};
