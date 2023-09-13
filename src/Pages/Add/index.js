import React from 'react';
import AppHeader from '../Common/Header';
import Header from './Header';

import styles from './styles.module.scss';

export default function Add() {
  return (
    <div className={styles.container}>
      <AppHeader hideSearchBar />
      <Header />
    </div>
  );
}
