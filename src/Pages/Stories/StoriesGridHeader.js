import React from 'react';
import styles from './styles.module.scss';

export default function StoriesGridHeader() {
  return (
    <header className={styles['stories-grid-header']}>
      <h1 className={styles.h1}>Top stories</h1>
      <button className={styles['add-story-btn']}>Add story</button>
    </header>
  );
}
