import React, { useState } from 'react';
import AppHeader from '../Common/Header';
import Header from './Header';

import styles from './styles.module.scss';
import useResizableTextarea from '../Common/useResizableTextarea';
import ImageInput from './ImageInput';

export default function Add() {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const ref = useResizableTextarea<string>(text);

  return (
    <div className={styles.container}>
      <AppHeader hideSearchBar />
      <Header publishBtnDisabled={!text || !title} />
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

function getSetter(setter: React.Dispatch<React.SetStateAction<string>>) {
  return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setter(e.target.value);
}
