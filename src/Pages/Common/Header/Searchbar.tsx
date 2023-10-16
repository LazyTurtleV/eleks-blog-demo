import React, { useState } from 'react';

import styles from './styles.module.scss';

import searchIcon from '../../../../assets/search.svg';

type SearchBarProps = {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={styles['search-bar']}
      style={isFocused ? { border: '2px solid white' } : undefined}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <span className={styles['input-icon']} style={{ backgroundImage: `url(${searchIcon})`}} />
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
