import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const GlobalContext = createContext({
  sidebar: {
    open: {
      get: () => false,
      set: () => {}
    }
  }
});

export const GlobalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{
      sidebar: {
        open: {
          get: () => isOpen,
          set: setIsOpen
        }
      }
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export function useGlobalContext() {
  return useContext(GlobalContext);
}