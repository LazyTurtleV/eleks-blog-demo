import React, { useEffect, useMemo, useState } from 'react';

import styles from './styles.module.scss';

import likeIcon from '../../../assets/like.svg';
import DataLayer from '../../Services/DataLayer';
import { useNavigate } from 'react-router-dom';
import LoaderHOC from '../Common/LoaderHOC';

export default function StoriesGrid({ searchToken }: any) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DataLayer.getArticles().then((d: any) => {
      setStories(d);
      setLoading(false);
    });
  }, []);

  const Content = useMemo(
    () =>
      LoaderHOC(
        <div className={styles['stories-grid']}>
          {stories
            .filter((s: any) =>
              s.header.toLowerCase().includes(searchToken.toLowerCase())
            )
            .map((story: any, i) => (
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
}: any) {
  return (
    <article className={styles.article}>
      <StoryHeader name={name} date={date} picture={picture} />
      <section className={styles.articleBody}>
        <img className={styles.img} src={img} alt={'story_image'} />
        <div>
          <h1>{header}</h1>
          <p className={styles.p}>{text}</p>
        </div>
      </section>
      <StoryFooter likes={likes} id={id} />
    </article>
  );
}

function StoryHeader({ picture, name, date }: any) {
  return (
    <header>
      <img src={picture} alt={'author_image'} />
      <p className={styles.name}>{name}</p>
      <p className={styles.date}>{date}</p>
    </header>
  );
}

function StoryFooter({ likes, id }: any) {
  const navigate = useNavigate();
  return (
    <footer>
      <button
        className={styles.readMoreBtn}
        onClick={() => navigate(encodeURI(id))}
      >
        Read more
      </button>
      <div className={styles.likeButton}>
        <img className={styles.likeIcon} src={likeIcon} />
        <p>{likes} likes</p>
      </div>
    </footer>
  );
}
