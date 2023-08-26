import React, { createContext, useCallback, useContext, useState } from 'react';

export const Context = createContext({});

export const useAuthContext  = () => useContext(Context);

async function requestToAuthIdentityManager({ login, password }) {
    if (login === 'quadro' && password === '1') {
        return {
            access_token: 'quadro'
        }
    }

    throw {};
}

export function AuthContext({ children }) {    
    const [authInfo, setAuthInfo] = useState({
        isAuthorized: false,
    })

  const login = useCallback((loginVar, password) => {
    requestToAuthIdentityManager({ loginVar, password }).then(
      ({ access_token }) =>
        setAuthInfo({
          isAuthorized: true,
          access_token,
        })
    );
  }, []);

    return <Context.Provider value={{ ...authInfo, login }}>
        {children}
    </Context.Provider>
}