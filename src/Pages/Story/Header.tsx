import React, { useState, useEffect } from 'react';

import useBreakpoints from '../Common/useBreakpoints';

import likeBtn from '../../../assets/like-button.svg';
import checkedLikeBtn from '../../../assets/like-button-checked.svg';

import styles from './styles.module.scss';
import Backbutton from '../Common/Backbutton';

type HeaderProps = {
  likesNumber?: number;
}

export default function Header({ likesNumber }: HeaderProps): React.ReactElement {
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

type LikeButtonProps = {
  likesNumber?: number;
  mobile?: boolean;
}

export function LikeButton({ likesNumber = 0, mobile }: LikeButtonProps): React.ReactElement {
  const [isChecked, check] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    setLikes(likesNumber);
  }, [likesNumber]);

  const onClick = () => {
    if (isChecked) {
      setLikes((p: number) => p - 1);
    } else {
      setLikes((p: number) => p + 1);
    }
    check((p) => !p);
  };

  return (
    <aside
      className={styles.likeBtn}
      style={!mobile ? { flexDirection: 'column', gap: '10px' } : undefined}
    >
      <span style={{backgroundImage: `url(${isChecked ? checkedLikeBtn : likeBtn})`}} onClick={onClick} />
      <p>{likes} likes</p>
    </aside>
  );
}
