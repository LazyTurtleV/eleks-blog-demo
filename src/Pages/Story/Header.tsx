import React, { useState, useEffect } from 'react';

import useBreakpoints from '../Common/useBreakpoints';

import likeBtn from '../../../assets/like-button.svg';
import checkedLikeBtn from '../../../assets/like-button-checked.svg';

import styles from './styles.module.scss';
import Backbutton from '../Common/Backbutton';

export default function Header({ likesNumber }: any) {
  const { breakpoint } = useBreakpoints();
  return (
    <header className={styles.storyHeader}>
      <Backbutton />
      {['small', 'medium'].includes(breakpoint) &&
        likesNumber !== undefined && (
          <LikeButton likesNumber={likesNumber} mobile />
        )}
    </header>
  );
}

export function LikeButton({ likesNumber = 0, mobile }: any) {
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
