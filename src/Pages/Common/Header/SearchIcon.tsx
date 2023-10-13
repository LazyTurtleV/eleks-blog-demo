import React from 'react';

import styles from './styles.module.scss';
import searchIcon from '../../../../assets/search.svg';

export default function SearchIcon({
  isMobileSearchActive,
  setIsMobileSearchActive,
}) {
  return (
    <img
      src={searchIcon}
      className={[
        styles['search-icon'],
        isMobileSearchActive ? styles['active-search-icon'] : undefined,
      ].join(' ')}
      onClick={() => setIsMobileSearchActive((p) => !p)}
    />
  );
}
