import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppHeader from '../Common/Header';
import DataLayer from '../../Services/DataLayer';

import useBreakpoints from '../Common/useBreakpoints';
import Header, { LikeButton } from './Header';

import styles from './styles.module.scss';

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
      <article className={styles.wrapper}>
        {breakpoint === 'large' && <LikeButton likesNumber={story?.likes} />}
        <Article story={story} />
      </article>
    </div>
  );
}

function Article({ story = {} }) {
  return (
    <main className={styles.wrapper?.main}>
      <header className={styles.main?.header}>
        <img
          className={styles.header?.img}
          src={story.img}
          alt={'story_image'}
        />
        <h1 className={styles.header?.h1}>{story.header}</h1>
        <Details {...story} />
      </header>
    </main>
  );
}

function Details({ author = {}, date }) {
  return (
    <section className={styles.header?.section}>
      <img className={styles.section?.img} src={author.picture} />
      <main className={styles.section?.main}>
        <cite className={styles.main?.cite}>{author.name}</cite>
        <time className={styles.main?.time}>{date}</time>
      </main>
    </section>
  );
}
