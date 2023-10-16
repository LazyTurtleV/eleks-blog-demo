import React from 'react';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

import arrowLeft from './../../../../assets/arrow-left.svg';

export default function Backbutton() {
  const navigate = useNavigate();
  return (
    <button className={styles.backButton} onClick={() => navigate('/stories')}>
      <span style={{ backgroundImage: `url(${arrowLeft})` }} className={styles.backButton.span}/>
      <h1 className={styles.backButton.h1}>All stories</h1>
    </button>
  );
}
