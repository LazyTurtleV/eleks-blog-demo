import React, { useRef, useState } from 'react';

import avatar from '../../../assets/avatar.png';
import attachment from '../../../assets/attachment.svg';

import styles from './styles.module.scss';

export default function AvatarSection() {
  const [file, setFile] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section className={styles.avatarSection}>
      <input
        type="file"
        ref={ref}
        onChange={(e) => e.target.files && setFile(URL.createObjectURL(e.target.files[0]))}
      />
      <img src={file || avatar} />
      <button className={styles.editButton} onClick={() => ref?.current?.click()}>
        <span style={{ backgroundImage: `url(${attachment})`}} />
        <p>Edit avatar</p>
      </button>
    </section>
  );
}
