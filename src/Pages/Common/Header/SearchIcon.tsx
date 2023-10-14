import React from 'react';

import styles from './styles.module.scss';
import SearchSvgIcon from '../../../../assets/search.svg';

export default function SearchIcon({
  isMobileSearchActive,
  setIsMobileSearchActive,
}: any) {
  return (
    <SearchSvgIcon
      className={[
        styles['search-icon'],
        isMobileSearchActive ? styles['active-search-icon'] : undefined,
      ].join(' ')}
      onClick={() => setIsMobileSearchActive((p) => !p)}
    />
  );
}
