import React from 'react';
import Backbutton from '../Common/Backbutton';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Backbutton />
      <button className={styles.publishBtn}>Publish</button>
    </header>
  );
}
