import React from 'react';

import styles from './styles.module.scss';
import loader from '../../../../assets/loader.svg';

export default function LoaderHOC(Component: React.ReactElement, loading: boolean): React.FC<{}> {
  const LoadingWrapper: React.FC<{}> = () => {
    return loading ? (
      <main className={styles.loaderContainer}>
        <span className={styles.span} style={{ backgroundImage: `url(${loader})` }} />
        <p className={styles.loader}>Loading...</p>
      </main>
    ) : (
      Component
    );
  };
  LoadingWrapper.displayName = `LoadingWrapper(${
    (Component as unknown as React.FC<{}>).displayName || (Component as unknown as React.FC<{}>).name || 'Component'
  })`;

  return LoadingWrapper;
}
