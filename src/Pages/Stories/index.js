import React, { useState } from 'react';

import Header from '../Common/Header';
import StoriesGrid from './StoriesGrid';

import styles from './styles.module.scss';
import StoriesGridHeader from './StoriesGridHeader';
import useBreakpoints from '../Common/useBreakpoints';
import screenConfig from '../Common/Constants/screenConfig';

export default function Stories() {
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [searchToken, setSearchToken] = useState('');
  const { breakpoint } = useBreakpoints(screenConfig);

  const shouldStoriesHeaderRender =
    breakpoint !== 'small' && !isMobileSearchActive;
  return (
    <div className={styles['page-wrapper']}>
      <Header
        isMobileSearchActive={isMobileSearchActive}
        setIsMobileSearchActive={setIsMobileSearchActive}
        searchToken={searchToken}
        setSearchToken={setSearchToken}
      />
      <main className={styles.main}>
        {shouldStoriesHeaderRender && <StoriesGridHeader />}
        <StoriesGrid />
      </main>
    </div>
  );
}
