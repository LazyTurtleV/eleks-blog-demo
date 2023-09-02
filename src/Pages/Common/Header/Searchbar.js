import React, { useState } from 'react';

import searchIcon from '../../../../assets/search.svg';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={'search-bar'}
      style={isFocused ? { border: '1px solid white' } : undefined}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <img className={'input-icon'} src={searchIcon} />
      <input type={'text'} placeholder={'Search blog'} />
    </div>
  );
}
