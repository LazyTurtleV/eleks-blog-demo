import React, { useState } from 'react';

import { InlineInput } from '../Common/FormField';

import styles from './styles.module.scss';
import AvatarSection from './AvatarSection';

export default function ProfileForm() {
  const [formState, setFormState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(formValuesFromEvent(e));
  };

  console.log(formState);

  return (
    <form className={styles.formStyle} onSubmit={handleSubmit}>
      <h1>Edit your profile</h1>
      <InlineInput type={'text'} name={'name'} label={'First name'} />
      <InlineInput type={'text'} name={'surname'} label={'Last name'} />
      <InlineInput type={'email'} name={'email'} label={'Email'} />
      <AvatarSection />
      <input type={'submit'} />
    </form>
  );
}

function formValuesFromEvent(e) {
  return [...e.target].reduce((acc, i) => ({ ...acc, [i.name]: i.value }), {});
}
