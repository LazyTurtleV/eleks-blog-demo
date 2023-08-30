import React, { useEffect, useState } from 'react';

import DataLayer from '../../Services/DataLayer';

export default function StoriesGrid() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    DataLayer.getArticles().then((d) => setStories(d));
  }, []);

  return (
    <div>
      {stories.map((story, i) => (
        //the order will never change so index as a key is ok, I guess
        <StoryItem key={i} {...story} />
      ))}
    </div>
  );
}

function StoryItem({ img, header, text, author: { name } }) {
  return (
    <section>
      <header>
        <p>{name}</p>
        <img src={img} alt={'story_image'} />
        <h1>{header}</h1>
      </header>
      <p>{text}</p>
    </section>
  );
}
