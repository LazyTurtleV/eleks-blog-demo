import React from 'react';

import './styles.scss';

import Header from './Header';

type FormContainerProps = {
  children: React.ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <main className={'container'}>
      <div className={'box'}>
        <Header />
        {children}
      </div>
    </main>
  );
}
