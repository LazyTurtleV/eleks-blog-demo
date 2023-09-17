import React from 'react';

import styles from './styles.module.scss';
import AppHeader from '../Common/Header';

export default function Profile() {
  return (
    <div className={styles.container}>
      <AppHeader hideSearchBar />
    </div>
  );
}
