import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../../../../assets/avatar.png';

import './styles.scss';
import Logo from './Logo';
import SearchBar from './Searchbar';
import useBreakpoints from '../useBreakpoints';
import SearchIcon from './SearchIcon';

export default function Header() {
  const navigate = useNavigate();
  const { breakpoint } = useBreakpoints({
    lowerBound: '500px',
    upperBound: '900px',
  });
  return (
    <header className="container">
      <Logo />
      {['large', 'medium'].includes(breakpoint) ? (
        <SearchBar />
      ) : (
        <SearchIcon />
      )}
      <img
        className={'user-avatar'}
        src={image}
        alt={'Avatar'}
        onClick={() => navigate('/profile')}
      />
    </header>
  );
}
