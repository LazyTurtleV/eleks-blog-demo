import React from 'react';

import styles from './styles.module.scss';
import loader from '../../../../assets/loader.svg';

export default function LoaderHOC(Component: React.ComponentType, loading: boolean) {
  const LoadingWrapper = () => {
    return loading ? (
      <main className={styles.loaderContainer}>
        <img className={styles.img} src={loader} alt={'Loading...'} />
        <p className={styles.loader}>Loading...</p>
      </main>
    ) : (
      Component
    );
  };
  LoadingWrapper.displayName = `LoadingWrapper(${
    Component.displayName || Component.name || 'Component'
  })`;

  return LoadingWrapper;
}
