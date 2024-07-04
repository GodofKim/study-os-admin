import { useContext } from 'react';
import { UsecasesContext } from './usecaseContext';

export const useUsecase = () => {
  const usecases = useContext(UsecasesContext);

  if (!usecases) {
    throw new Error('useUsecase must be used within a UsecaseProvider');
  }

  return usecases;
};
