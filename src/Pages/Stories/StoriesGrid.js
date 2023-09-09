import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import likeIcon from '../../../assets/like.svg';
import DataLayer from '../../Services/DataLayer';

export default function StoriesGrid({ searchToken }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    DataLayer.getArticles().then((d) => setStories(d));
  }, []);

  return (
    <div className={styles['stories-grid']}>
      {stories
        .filter((s) =>
          s.header.toLowerCase().includes(searchToken.toLowerCase())
        )
        .map((story, i) => (
          //the order will never change so index as a key is ok, I guess
          <StoryItem key={i} {...story} />
        ))}
    </div>
  );
}

function StoryItem({
  img,
  header,
  text,
  author: { name, picture },
  date,
  likes,
}) {
  return (
    <section className={styles.section}>
      <StoryHeader name={name} date={date} picture={picture} />
      <div className={styles.articleBody}>
        <img className={styles.img} src={img} alt={'story_image'} />
        <article>
          <h1>{header}</h1>
          <p className={styles.p}>{text}</p>
        </article>
      </div>
      <StoryFooter likes={likes} />
    </section>
  );
}

function StoryHeader({ picture, name, date }) {
  return (
    <header>
      <img src={picture} alt={'author_image'} />
      <p className={styles.name}>{name}</p>
      <p className={styles.date}>{date}</p>
    </header>
  );
}

function StoryFooter({ likes }) {
  return (
    <footer>
      <button className={styles.readMoreBtn}>Read more</button>
      <div className={styles.likeButton}>
        <img className={styles.likeIcon} src={likeIcon} />
        <p>{likes} likes</p>
      </div>
    </footer>
  );
}
