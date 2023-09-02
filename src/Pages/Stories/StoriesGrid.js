import React, { useEffect, useState } from 'react';

import likeIcon from '../../../assets/like.svg';
import DataLayer from '../../Services/DataLayer';

export default function StoriesGrid() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    DataLayer.getArticles().then((d) => setStories(d));
  }, []);

  return (
    <div className={'stories-grid'}>
      {stories.map((story, i) => (
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
    <section>
      <header>
        <img src={picture} alt={'author_image'} />
        <p className={'name'}>{name}</p>
        <p className={'date'}>{date}</p>
      </header>
      <img src={img} alt={'story_image'} />
      <h1>{header}</h1>
      <p>{text}</p>
      <footer>
        <button className={'readMoreBtn'}>Read more</button>
        <div className={'likeButton'}>
          <img className={'likeIcon'} src={likeIcon} />
          <p>{likes} likes</p>
        </div>
      </footer>
    </section>
  );
}
