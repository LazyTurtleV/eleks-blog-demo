import React from 'react';

import styles from './styles.module.scss';
import Loader from '../../../../assets/loader.svg';

export default function LoaderHOC(Component: any, loading: any) {
  const LoadingWrapper = () => {
    return loading ? (
      <main className={styles.loaderContainer}>
        <Loader className={styles.img} />
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
