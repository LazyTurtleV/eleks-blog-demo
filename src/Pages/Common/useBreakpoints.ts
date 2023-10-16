import { useCallback, useEffect, useReducer } from 'react';

import screenConfig from './Constants/screenConfig';

enum BREAKPOINT_ACTION_TYPES {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
};

type Action = {
  type: BREAKPOINT_ACTION_TYPES;
  payload: boolean;
}

function reducer(state: BREAKPOINT_ACTION_TYPES, action: Action) {
  return action.payload ? action.type : state;
}

export default function useBreakpoints() {
  const [breakpoint, dispatch] = useReducer<React.Reducer<BREAKPOINT_ACTION_TYPES, Action>>(reducer, BREAKPOINT_ACTION_TYPES.LARGE);
  const { lowerBound, upperBound } = screenConfig;

  const handleLarge = useCallback(
    (e: MediaQueryListEvent) => {
      dispatch({ type: BREAKPOINT_ACTION_TYPES.LARGE, payload: e.matches });
    },
    [dispatch]
  );
  const handleMedium = useCallback(
    (e: MediaQueryListEvent) => {
      dispatch({ type: BREAKPOINT_ACTION_TYPES.MEDIUM, payload: e.matches });
    },
    [dispatch]
  );
  const handleSmall = useCallback(
    (e: MediaQueryListEvent) => {
      dispatch({ type: BREAKPOINT_ACTION_TYPES.SMALL, payload: e.matches });
    },
    [dispatch]
  );

  useEffect(() => {
    const largeWidthWatcher = window.matchMedia(`(width >= ${upperBound})`);
    const mediumWidthWatcher = window.matchMedia(
      `(${lowerBound} <= width <= ${upperBound})`
    );
    const smallWidthWatcher = window.matchMedia(`(width <= ${lowerBound})`);
    largeWidthWatcher.addEventListener('change', handleLarge);
    mediumWidthWatcher.addEventListener('change', handleMedium);
    smallWidthWatcher.addEventListener('change', handleSmall);

    if (smallWidthWatcher.matches) {
      dispatch({ type: BREAKPOINT_ACTION_TYPES.SMALL, payload: true });
    } else if (mediumWidthWatcher.matches) {
      dispatch({ type: BREAKPOINT_ACTION_TYPES.MEDIUM, payload: true });
    } else {
      dispatch({ type: BREAKPOINT_ACTION_TYPES.LARGE, payload: true });
    }

    return () => {
      largeWidthWatcher.addEventListener('change', handleLarge);
      mediumWidthWatcher.removeEventListener('change', handleMedium);
      smallWidthWatcher.removeEventListener('change', handleSmall);
    };
  }, [handleSmall, handleMedium, handleLarge, lowerBound, upperBound]);

  return {
    breakpoint,
  };
}
