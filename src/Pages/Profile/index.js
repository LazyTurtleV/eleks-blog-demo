import React from 'react';

import styles from './styles.module.scss';
import AppHeader from '../Common/Header';
import ProfileForm from './ProfileForm';

export default function Profile() {
  return (
    <div className={styles.container}>
      <AppHeader hideSearchBar />
      <ProfileForm />
    </div>
  );
}
