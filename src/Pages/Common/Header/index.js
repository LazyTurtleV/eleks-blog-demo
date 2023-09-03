import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../../../../assets/avatar.png';

import styles from './styles.module.scss';
import Logo from './Logo';
import SearchBar from './Searchbar';
import useBreakpoints from '../useBreakpoints';
import SearchIcon from './SearchIcon';
import screenConfig from '../Constants/screenConfig';

export default function Header({
  isMobileSearchActive,
  setIsMobileSearchActive,
  searchToken,
  setSearchToken,
}) {
  const navigate = useNavigate();
  const { breakpoint } = useBreakpoints(screenConfig);

  const onSearchTokenChange = (e) => setSearchToken(e.target.value);

  return (
    <main className={styles.main}>
      <header className={styles.container}>
        <Logo />
        {['large', 'medium'].includes(breakpoint) ? (
          <SearchBar />
        ) : (
          <SearchIcon
            isMobileSearchActive={isMobileSearchActive}
            setIsMobileSearchActive={setIsMobileSearchActive}
          />
        )}
        <img
          className={styles['user-avatar']}
          src={image}
          alt={'Avatar'}
          onClick={() => navigate('/profile')}
        />
      </header>
      {breakpoint === 'small' && isMobileSearchActive && (
        <input
          className={styles['mobile-search-bar']}
          value={searchToken}
          onChange={onSearchTokenChange}
          type={'text'}
          placeholder={'Search Eleks Blog'}
        />
      )}
    </main>
  );
}
