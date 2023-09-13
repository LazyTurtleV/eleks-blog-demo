import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export default function StoriesGridHeader() {
  const navigate = useNavigate();
  return (
    <header className={styles['stories-grid-header']}>
      <h1 className={styles.h1}>Top stories</h1>
      <button
        className={styles['add-story-btn']}
        onClick={() => navigate('../add')}
      >
        Add story
      </button>
    </header>
  );
}
