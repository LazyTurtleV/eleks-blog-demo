import React from 'react';

import Header from '../Common/Header';
import StoriesGrid from './StoriesGrid';

import './styles.scss';
import StoriesGridHeader from './StoriesGridHeader';

export default function Stories() {
  return (
    <>
      <Header />
      <main>
        <StoriesGridHeader />
        <StoriesGrid />
      </main>
    </>
  );
}
