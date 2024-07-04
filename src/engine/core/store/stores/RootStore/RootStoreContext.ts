import { createContext } from "react";
import { RootStore, RootStoreModel } from "./RootStore";

export const rootStore = RootStoreModel.create({});

export const rootStoreContext = createContext(rootStore);
export const RootStoreProvider = rootStoreContext.Provider;

(window as Window & typeof globalThis & { rootStore: RootStore }).rootStore =
  rootStore;
