import React, { useEffect, useMemo, useState } from 'react';

import styles from './styles.module.scss';

import likeIcon from '../../../assets/like.svg';
import DataLayer from '../../Services/DataLayer';
import { useNavigate } from 'react-router-dom';
import LoaderHOC from '../Common/LoaderHOC';

type StoriesGridProps = {
  searchToken: string;
}

export default function StoriesGrid({ searchToken }: StoriesGridProps) {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    DataLayer.getArticles().then((d: Story[]) => {
      setStories(d);
      setLoading(false);
    });
  }, []);

  const Content = useMemo(
    () =>
      LoaderHOC(
        <div className={styles['stories-grid']}>
          {stories
            .filter((s: Story) =>
              s.header.toLowerCase().includes(searchToken.toLowerCase())
            )
            .map((story: Story, i: number) => (
              //the order will never change so index as a key is ok, I guess
              <StoryItem key={i} {...story} />
            ))}
        </div>,
        loading
      ),
    [loading, stories, searchToken]
  );

  return <Content />;
}

function StoryItem({
  id,
  img,
  header,
  text,
  author: { name, picture },
  date,
  likes,
}: Story) {
  return (
    <article className={styles.article}>
      <main>
        <StoryHeader name={name} date={date} picture={picture as string} />
        <section className={styles.articleBody}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={img} alt={'story_image'} />
          </div>
          <div>
            <h1>{header}</h1>
            <p className={styles.p}>{text}</p>
          </div>
        </section>
      </main>
      <StoryFooter likes={likes} id={id} />
    </article>
  );
}

type StoryHeaderProps = {
  picture: string;
  name: string;
  date: string;
}

function StoryHeader({ picture, name, date }: StoryHeaderProps) {
  return (
    <header>
      <img src={picture} alt={'author_image'} />
      <p className={styles.name}>{name}</p>
      <p className={styles.date}>{date}</p>
    </header>
  );
}

function StoryFooter({ likes, id }: Partial<Story>) {
  const navigate = useNavigate();
  return (
    <footer>
      <button
        className={styles.readMoreBtn}
        onClick={() => navigate(encodeURI(id as string))}
      >
        Read more
      </button>
      <div className={styles.likeButton}>
        <span className={styles.likeIcon} style={{ backgroundImage: `url(${likeIcon})` }} />
        <p>{likes} likes</p>
      </div>
    </footer>
  );
}
