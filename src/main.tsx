import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UsecaseProvider } from "./hooks/usecaseContext.tsx";
import { Usecases } from "./engine/core/types/Usecases.ts";
import {
  rootStore,
  RootStoreProvider,
} from "./engine/core/store/stores/RootStore/RootStoreContext.ts";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const usecases: Usecases = {
  // Define your usecases here
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsecaseProvider usecases={usecases}>
      <RootStoreProvider value={rootStore}>
        <MantineProvider defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </RootStoreProvider>
    </UsecaseProvider>
  </React.StrictMode>
);
