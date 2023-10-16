import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppHeader from '../Common/Header';
import DataLayer from '../../Services/DataLayer';

import useBreakpoints from '../Common/useBreakpoints';
import Header, { LikeButton } from './Header';

import styles from './styles.module.scss';
import LoaderHOC from '../Common/LoaderHOC';

type RouteParams = {
  storyId: string;
}

export default function Story(): React.ReactElement {
  const [story, setStory] = useState<Story>();
  const [loading, setLoading] = useState<boolean>(true);
  const { storyId } = useParams<RouteParams>();
  const { breakpoint } = useBreakpoints();

  useEffect(() => {
    if (!storyId) {
      return;
    }

    DataLayer.getArticle(storyId).then((d) => {
      setStory(d);
      setLoading(false);
    });
  }, [storyId]);

  const ArticleContent = useMemo(
    () =>
      LoaderHOC(
        <article className={styles.wrapper}>
          {breakpoint === 'large' && <LikeButton likesNumber={story?.likes} />}
          <Article story={story!} />
        </article>,
        loading
      ),
    [story, loading, breakpoint]
  );

  return (
    <div className={styles.container}>
      <AppHeader hideSearchBar />
      <Header likesNumber={story?.likes} />
      <ArticleContent />
    </div>
  );
}

type ArticleProps = {
  story: Story;
}

function Article({ story }: ArticleProps): React.ReactElement {
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
        <p className={styles.header?.p}>{story.text}</p>
      </header>
    </main>
  );
}

function Details({ author, date }: Partial<Story>): React.ReactElement {
  return (
    <section className={styles.header?.section}>
      <img className={styles.section?.img} src={author?.picture} />
      <main className={styles.section?.main}>
        <cite className={styles.main?.cite}>{author?.name}</cite>
        <time className={styles.main?.time}>{date}</time>
      </main>
    </section>
  );
}
