import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../../../../assets/avatar.png';

import styles from './styles.module.scss';
import Logo from './Logo';
import SearchBar from './Searchbar';
import useBreakpoints from '../useBreakpoints';
import SearchIcon from './SearchIcon';

export default function Header({
  hideSearchBar = false,
  isMobileSearchActive = false,
  setIsMobileSearchActive = () => {},
  searchToken = '',
  setSearchToken = (_a: any) => {},
}) {
  const navigate = useNavigate();
  const { breakpoint } = useBreakpoints();

  const onSearchTokenChange = (e: any) => setSearchToken(e.target.value);

  return (
    <main className={styles.main}>
      <header className={styles.container}>
        <Logo />
        {!hideSearchBar && (
          <SearchControl
            isMobileSearchActive={isMobileSearchActive}
            setIsMobileSearchActive={setIsMobileSearchActive}
            searchToken={searchToken}
            onSearchTokenChange={onSearchTokenChange}
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

function SearchControl({
  isMobileSearchActive,
  setIsMobileSearchActive,
  searchToken,
  onSearchTokenChange,
}: any) {
  const { breakpoint } = useBreakpoints();
  return ['large', 'medium'].includes(breakpoint) ? (
    <SearchBar value={searchToken} onChange={onSearchTokenChange} />
  ) : (
    <SearchIcon
      isMobileSearchActive={isMobileSearchActive}
      setIsMobileSearchActive={setIsMobileSearchActive}
    />
  );
}
