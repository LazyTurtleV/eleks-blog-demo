import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import arrowLeft from './../../../assets/arrow-left.svg';
import DataLayer from '../../Services/DataLayer';

import styles from './styles.module.scss';

export default function Story() {
  const [story, setStory] = useState();
  const { storyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    DataLayer.getArticle(storyId).then((d) => setStory(d));
  }, [storyId]);

  return (
    <div className={styles.container}>
      <header className={styles.storyHeader}>
        <button
          className={styles.backButton}
          onClick={() => navigate('/stories')}
        >
          <img className={styles.backButton.img} src={arrowLeft} alt={'Back'} />
          <h1 className={styles.backButton.h1}>All stories</h1>
        </button>
      </header>
    </div>
  );
}
