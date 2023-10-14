import React from 'react';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

import ArrowLeft from './../../../../assets/arrow-left.svg';

export default function Backbutton() {
  const navigate = useNavigate();
  return (
    <button className={styles.backButton} onClick={() => navigate('/stories')}>
      <ArrowLeft className={styles.backButton.img} />
      <h1 className={styles.backButton.h1}>All stories</h1>
    </button>
  );
}
