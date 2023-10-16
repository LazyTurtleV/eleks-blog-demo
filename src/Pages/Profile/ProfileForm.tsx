import React, { useState } from 'react';

import { InlineInput } from '../Common/FormField';

import styles from './styles.module.scss';
import AvatarSection from './AvatarSection';

type FormState = {
  name?: string;
  surname?: string;
  email?: string;
}

export default function ProfileForm() {
  const [formState, setFormState] = useState<FormState>({});

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(formValuesFromEvent(e));
  };

  return (
    <div className={styles.container}>
      <h1>Edit your profile</h1>
      <main className={styles.profileMain}>
        <form className={styles.profileForm} onSubmit={handleSubmit}>
          <InlineInput type={'text'} name={'name'} label={'First name'} />
          <InlineInput type={'text'} name={'surname'} label={'Last name'} />
          <InlineInput type={'email'} name={'email'} label={'Email'} />
          <input type={'submit'} value={'Update details'} />
        </form>
        <AvatarSection />
      </main>
    </div>
  );
}

function formValuesFromEvent(e: React.SyntheticEvent<HTMLFormElement> & any): FormState {
  return [...e.target].reduce(
    (acc, i) => ({ ...acc, [i.name]: i.value || undefined }),
    {}
  );
}
