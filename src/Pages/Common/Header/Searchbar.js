import React, { useState } from 'react';

import styles from './styles.module.scss';

import searchIcon from '../../../../assets/search.svg';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={styles['search-bar']}
      style={isFocused ? { border: '2px solid white' } : undefined}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <img className={styles['input-icon']} src={searchIcon} />
      <input
        className={styles.input}
        type={'text'}
        placeholder={'Search blog'}
      />
    </div>
  );
}
