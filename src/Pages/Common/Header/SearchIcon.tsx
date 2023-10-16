import React from 'react';

import styles from './styles.module.scss';
import searchIcon from '../../../../assets/search.svg';

type SearchIconProps = {
  isMobileSearchActive: boolean;
  setIsMobileSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchIcon({
  isMobileSearchActive,
  setIsMobileSearchActive = (a: SetStateAction<boolean>) => {},
}: Partial<SearchIconProps>) {
  return (
    <span
      style={{
        backgroundImage: `url(${searchIcon})`,
      }}
      className={[
        styles['search-icon'],
        isMobileSearchActive ? styles['active-search-icon'] : undefined,
      ].join(' ')}
      onClick={() => setIsMobileSearchActive((p: boolean) => !p)}
    />
  );
}
