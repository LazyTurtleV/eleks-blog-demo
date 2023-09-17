import React, { useState } from 'react';
import AppHeader from '../Common/Header';
import Header from './Header';

import styles from './styles.module.scss';
import useResizableTextarea from '../Common/useResizableTextarea';
import ImageInput from './ImageInput';

export default function Add() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const ref = useResizableTextarea(text);

  return (
    <div className={styles.container}>
      <AppHeader hideSearchBar />
      <Header />
      <main className={styles.article}>
        <ImageInput />
        <input
          className={styles.title}
          placeholder="Title"
          onChange={getSetter(setTitle)}
        />
        <textarea
          ref={ref}
          className={styles.text}
          placeholder="Type text"
          onChange={getSetter(setText)}
        />
      </main>
    </div>
  );
}

function getSetter(setter) {
  return (e) => setter(e.target.value);
}
