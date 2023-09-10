import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppHeader from '../Common/Header';
import DataLayer from '../../Services/DataLayer';

import styles from './styles.module.scss';
import useBreakpoints from '../Common/useBreakpoints';
import Header, { LikeButton } from './Header';

export default function Story() {
  const [story, setStory] = useState();
  const { storyId } = useParams();
  const { breakpoint } = useBreakpoints();

  useEffect(() => {
    DataLayer.getArticle(storyId).then((d) => setStory(d));
  }, [storyId]);

  return (
    <div className={styles.container}>
      <AppHeader />
      <Header likesNumber={story?.likes} />
      <div className={styles.wrapper}>
        {breakpoint === 'large' && <LikeButton likesNumber={story?.likes} />}
        <Article story={story} />
      </div>
    </div>
  );
}

function Article({ story }) {
  return (
    <main className={styles.wrapper?.main}>
      <header className={styles.main?.header}>
        <img
          className={styles.header?.img}
          src={story?.img}
          alt={'story_image'}
        />
      </header>
    </main>
  );
}
