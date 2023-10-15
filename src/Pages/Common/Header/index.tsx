import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../../../../assets/avatar.png';

import styles from './styles.module.scss';
import Logo from './Logo';
import SearchBar from './Searchbar';
import useBreakpoints from '../useBreakpoints';
import SearchIcon from './SearchIcon';

type HeaderProps = {
  hideSearchBar?: boolean;
  isMobileSearchActive?: boolean;
  setIsMobileSearchActive?: React.Dispatch<React.SetStateAction<boolean>>,
  searchToken?: string;
  setSearchToken?: React.Dispatch<React.SetStateAction<string>>,
}

type SetStateAction<T> = T | ((prev: T) => T)

export default function Header({
  hideSearchBar = false,
  isMobileSearchActive = false,
  setIsMobileSearchActive = () => {},
  searchToken = '',
  setSearchToken = (a: SetStateAction<string>) => {},
}: HeaderProps) {
  const navigate = useNavigate();
  const { breakpoint } = useBreakpoints();

  const onSearchTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchToken(e.target.value);

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

type SearchControlProps = Partial<HeaderProps> & {
  onSearchTokenChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchControl({
  isMobileSearchActive,
  setIsMobileSearchActive,
  searchToken,
  onSearchTokenChange,
}: SearchControlProps) {
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
