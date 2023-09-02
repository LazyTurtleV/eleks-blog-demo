import React from 'react';

import Header from '../Common/Header';
import StoriesGrid from './StoriesGrid';

import styles from './styles.module.scss';
import StoriesGridHeader from './StoriesGridHeader';

export default function Stories() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <StoriesGridHeader />
        <StoriesGrid />
      </main>
    </>
  );
}
