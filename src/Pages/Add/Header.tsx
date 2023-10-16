import React from 'react';
import Backbutton from '../Common/Backbutton';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  publishBtnDisabled: boolean;
}

export default function Header({ publishBtnDisabled }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className={styles.articleHeader}>
      <Backbutton />
      <button
        className={styles.publishBtn}
        disabled={publishBtnDisabled}
        onClick={() => navigate('../stories')}
      >
        Publish
      </button>
    </header>
  );
}
