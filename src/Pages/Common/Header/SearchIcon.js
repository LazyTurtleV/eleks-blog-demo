import React from 'react';

import styles from './styles.module.scss';
import searchIcon from '../../../../assets/search.svg';

export default function SearchIcon() {
  return <img src={searchIcon} className={styles['search-icon']} />;
}
