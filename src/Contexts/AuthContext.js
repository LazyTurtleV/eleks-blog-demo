import React, { createContext, useCallback, useContext, useState } from 'react';

export const Context = createContext({});

export const useAuthContext = () => useContext(Context);

async function requestToAuthIdentityManager({ login, password }) {
  if (login === 'quadro@gmail.com' && password === '1') {
    return {
      status: 200,
      access_token: 'quadro',
    };
  }

  throw {
    status: 400,
  };
}

export function AuthContext({ children }) {
  const [authInfo, setAuthInfo] = useState({
    isAuthorized: false,
  });
  const [onErrorCallbacks, setOnErrorCallbacks] = useState([]);

  const login = useCallback(
    (loginVar, password) => {
      requestToAuthIdentityManager({ login: loginVar, password })
        .then(({ access_token }) =>
          setAuthInfo({
            isAuthorized: true,
            access_token,
          })
        )
        .catch((err) => {
          for (const callback of onErrorCallbacks) {
            callback(err);
          }
        });
    },
    [onErrorCallbacks]
  );

  const subscribeOnError = useCallback((callback) => {
    setOnErrorCallbacks((p) => [...p, callback]);
  }, []);

  return (
    <Context.Provider value={{ ...authInfo, subscribeOnError, login }}>
      {children}
    </Context.Provider>
  );
}
