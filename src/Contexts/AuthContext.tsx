import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookie from 'universal-cookie';

export const Context = createContext({});

export const useAuthContext = () => useContext(Context);

const cookie = new Cookie();

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

  useEffect(() => {
    const auth = cookie.get('auth');
    if (auth) {
      setAuthInfo({ isAuthorized: true, access_token: auth });
    }
  }, [setAuthInfo]);

  const login = useCallback(
    (loginVar, password) => {
      requestToAuthIdentityManager({ login: loginVar, password })
        .then(({ access_token }) => {
          setAuthInfo({
            isAuthorized: true,
            access_token,
          });
          cookie.set('auth', access_token);
        })
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
