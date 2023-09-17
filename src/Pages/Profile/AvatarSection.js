import React, { useRef, useState } from 'react';

import avatar from '../../../assets/avatar.png';
import attachment from '../../../assets/attachment.svg';

import styles from './styles.module.scss';

export default function AvatarSection() {
  const [file, setFile] = useState(null);
  const ref = useRef(null);
  return (
    <section className={styles.avatarSection}>
      <input
        type="file"
        ref={ref}
        onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
      />
      <img src={file || avatar} />
      <button className={styles.editButton} onClick={() => ref.current.click()}>
        <img src={attachment} />
        <p>Edit avatar</p>
      </button>
    </section>
  );
}
