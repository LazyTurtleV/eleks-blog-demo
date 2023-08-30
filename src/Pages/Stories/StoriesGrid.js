import React, { useEffect, useState } from 'react';
import DataLayer from '../../Services/DataLayer';

export default function StoriesGrid() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    DataLayer.getArticles().then((d) => setStories(d));
  }, []);

  return (
    <div>
      {stories.map((story, i) => {
        console.log(story.img);
        //the order will never change so index as a key is ok, I guess
        return <StoryItem key={i} img={story.img} author={story.author} />;
      })}
    </div>
  );
}

function StoryItem({ img, header, author: { name } }) {
  return (
    <section>
      <header>
        <p>{name}</p>
        <img src={img} alt={'story_image'} />
        <h1>{header}</h1>
      </header>
    </section>
  );
}
