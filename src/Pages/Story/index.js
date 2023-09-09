import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import likeBtn from '../../../assets/like-button.svg';
import checkedLikeBtn from '../../../assets/like-button-checked.svg';
import arrowLeft from './../../../assets/arrow-left.svg';

import AppHeader from '../Common/Header';
import DataLayer from '../../Services/DataLayer';

import styles from './styles.module.scss';
import useBreakpoints from '../Common/useBreakpoints';

export default function Story() {
  const [story, setStory] = useState();
  const { storyId } = useParams();

  useEffect(() => {
    DataLayer.getArticle(storyId).then((d) => setStory(d));
  }, [storyId]);

  return (
    <div className={styles.container}>
      <AppHeader />
      <Header likesNumber={story?.likes} />
    </div>
  );
}

function Header({ likesNumber }) {
  const navigate = useNavigate();
  const { breakpoint } = useBreakpoints();
  return (
    <header className={styles.storyHeader}>
      <button
        className={styles.backButton}
        onClick={() => navigate('/stories')}
      >
        <img className={styles.backButton.img} src={arrowLeft} alt={'Back'} />
        <h1 className={styles.backButton.h1}>All stories</h1>
      </button>
      {breakpoint === 'small' && (
        <LikeButton likesNumber={likesNumber} mobile />
      )}
    </header>
  );
}

function LikeButton({ likesNumber = 0, mobile }) {
  const [isChecked, check] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(likesNumber);
  }, [likesNumber]);

  const onClick = () => {
    if (isChecked) {
      setLikes((p) => p - 1);
    } else {
      setLikes((p) => p + 1);
    }
    check((p) => !p);
  };

  return (
    <div
      className={styles.likeBtn}
      style={!mobile ? { flexDirection: 'column', gap: '10px' } : undefined}
    >
      <img src={isChecked ? checkedLikeBtn : likeBtn} onClick={onClick} />
      <p>{likes} likes</p>
    </div>
  );
}
