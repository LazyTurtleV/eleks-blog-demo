import React from 'react';

import Header from '../Common/Header';
import StoriesGrid from './StoriesGrid';

import './styles.scss';

export default function Stories() {
  return (
    <>
      <Header />
      <main>
        <StoriesGrid />
      </main>
    </>
  );
}
