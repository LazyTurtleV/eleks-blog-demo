import React from 'react';

import './styles.scss';

import Header from './Header';

export default function FormContainer({ children }: any) {
  return (
    <main className={'container'}>
      <div className={'box'}>
        <Header />
        {children}
      </div>
    </main>
  );
}