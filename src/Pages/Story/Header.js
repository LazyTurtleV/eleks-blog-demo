import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBreakpoints from '../Common/useBreakpoints';

import likeBtn from '../../../assets/like-button.svg';
import checkedLikeBtn from '../../../assets/like-button-checked.svg';
import arrowLeft from './../../../assets/arrow-left.svg';

import styles from './styles.module.scss';

export default function Header({ likesNumber }) {
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
      {['small', 'medium'].includes(breakpoint) && (
        <LikeButton likesNumber={likesNumber} mobile />
      )}
    </header>
  );
}

export function LikeButton({ likesNumber = 0, mobile }) {
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
    <aside
      className={styles.likeBtn}
      style={!mobile ? { flexDirection: 'column', gap: '10px' } : undefined}
    >
      <img src={isChecked ? checkedLikeBtn : likeBtn} onClick={onClick} />
      <p>{likes} likes</p>
    </aside>
  );
}
