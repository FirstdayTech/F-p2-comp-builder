import React, { createContext, useState, useContext } from 'react';
import COMPS from '../db/comps';

const GlobalContext = createContext({
  sidebar: {
    open: {
      get: () => false,
      set: () => {}
    }
  },
  comps: {
    get: () => [],
    set: () => {}
  },
  user: {
    get: () => ({ auth: false }),
    set: () => {}
  }
});

export const GlobalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comps, setComps] = useState(COMPS);
  const [user, setUser] = useState({ auth: false, email: '' });

  return (
    <GlobalContext.Provider value={{
      sidebar: {
        open: {
          get: () => isOpen,
          set: setIsOpen
        }
      },
      comps: {
        get: () => comps,
        set: setComps
      },
      user: {
        get: () => user,
        set: setUser
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