import React from 'react';

import avatar from '../../../assets/avatar.png';

import styles from './styles.module.scss';

export default function AvatarSection() {
  return (
    <section className={styles.avatarSection}>
      <img src={avatar} />
    </section>
  );
}
