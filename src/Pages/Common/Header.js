import React from 'react';

import image from '../../../assets/avatar.png';

import './styles.scss';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="container">
      <Logo />
      <img src={image} alt={'Avatar'} />
    </header>
  );
}
