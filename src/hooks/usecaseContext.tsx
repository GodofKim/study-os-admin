import { createContext } from "react";
import { Usecases } from "../engine/core/types/Usecases";

export const UsecasesContext = createContext<Usecases | undefined>(undefined);

interface Props {
  usecases: Usecases;
  children: React.ReactNode;
}

export const UsecaseProvider = ({ children, usecases }: Props) => {
  return (
    <UsecasesContext.Provider value={usecases}>
      {children}
    </UsecasesContext.Provider>
  );
};
