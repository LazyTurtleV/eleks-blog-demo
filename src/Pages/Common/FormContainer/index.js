import React from 'react';

import './styles.scss';

import Header from './Header';

export default function Login({ children }) {
  return (
    <main className={'container'}>
      <div className={'box'}>
        <Header />
        {children}
      </div>
    </main>
  );
}
