import React from 'react';

import image from '../../../assets/avatar.png';

import './styles.scss';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="container">
      <Logo />
      <img src={image} alt={'Avatar'} onClick={() => navigate('/profile')} />
    </header>
  );
}
