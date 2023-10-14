import React, { useState } from 'react';

import styles from './styles.module.scss';

import SearchIcon from '../../../../assets/search.svg';

export default function SearchBar({ value, onChange }: any) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={styles['search-bar']}
      style={isFocused ? { border: '2px solid white' } : undefined}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <SearchIcon className={styles['input-icon']} />
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        type={'text'}
        placeholder={'Search blog'}
      />
    </div>
  );
}
