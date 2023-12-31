import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookie from 'universal-cookie';

type ErrCallback = (err: unknown) => void;

type AuthContext = {
  isAuthorized: boolean;
  access_token?: string;
  subscribeOnError: (callback: ErrCallback) => void;
  login: (login: string, password: string) => void;
}

export const Context = createContext<AuthContext | undefined>(undefined);

export const useAuthContext = (): AuthContext => {
  const ctx = useContext<AuthContext | undefined>(Context);

  if (ctx === undefined) {
    throw new Error('useAuthContext must be used within a AuthContext');
  }

  return ctx;
};

const cookie = new Cookie();

type AIMResponse = {
  status: number;
  access_token?: string;
}

type AIMRequest = {
  login: string;
  password: string;
}

async function requestToAuthIdentityManager({ login, password }: AIMRequest): Promise<AIMResponse> {
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

export function AuthContext({ children }: { children: React.ReactNode }) {
  const [authInfo, setAuthInfo] = useState<Omit<AuthContext, "login"|"subscribeOnError">>({
    isAuthorized: false,
  });
  const [onErrorCallbacks, setOnErrorCallbacks] = useState<ErrCallback[]>([]);

  useEffect(() => {
    const auth = cookie.get('auth');
    if (auth) {
      setAuthInfo({ isAuthorized: true, access_token: auth });
    }
  }, [setAuthInfo]);

  const login = useCallback(
    (loginVar: string, password: string) => {
      requestToAuthIdentityManager({ login: loginVar, password })
        .then(({ access_token }) => {
          setAuthInfo({
            isAuthorized: true,
            access_token,
          });
          cookie.set('auth', access_token);
        })
        .catch((err: unknown) => {
          for (const callback of onErrorCallbacks) {
            callback(err);
          }
        });
    },
    [onErrorCallbacks]
  );

  const subscribeOnError = useCallback((callback: ErrCallback) => {
    setOnErrorCallbacks((p) => [...p, callback]);
  }, []);

  return (
    <Context.Provider value={{ ...authInfo, subscribeOnError, login }}>
      {children}
    </Context.Provider>
  );
}
