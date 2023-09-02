import React from 'react';

import image from '../../../../assets/avatar.png';

import './styles.scss';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import SearchBar from './Searchbar';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="container">
      <Logo />
      <SearchBar />
      <img src={image} alt={'Avatar'} onClick={() => navigate('/profile')} />
    </header>
  );
}
