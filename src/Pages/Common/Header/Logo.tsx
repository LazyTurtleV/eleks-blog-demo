import React from 'react';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate('../')}>
      <h1>ELEKS</h1>
      <h1>BLOG</h1>
    </div>
  );
}
