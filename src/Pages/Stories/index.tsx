import React, { useState } from 'react';

import Header from '../Common/Header';
import StoriesGrid from './StoriesGrid';

import styles from './styles.module.scss';
import StoriesGridHeader from './StoriesGridHeader';
import useBreakpoints from '../Common/useBreakpoints';

export default function Stories() {
  const [isMobileSearchActive, setIsMobileSearchActive] = useState<boolean>(false);
  const [searchToken, setSearchToken] = useState<string>('');
  const { breakpoint } = useBreakpoints();

  const shouldStoriesHeaderRender =
    breakpoint !== 'small' ? true : !isMobileSearchActive;
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
        <StoriesGrid searchToken={searchToken} />
      </main>
    </div>
  );
}
