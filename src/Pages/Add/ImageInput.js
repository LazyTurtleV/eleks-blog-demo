import React, { useRef, useState } from 'react';

import styles from './styles.module.scss';

export default function ImageInput() {
  const [selectedImage, selectImage] = useState(null);
  const ref = useRef(null);

  return (
    <div className={styles.articleImage}>
      <input
        ref={ref}
        type={'file'}
        accept={'image/png, image/jpeg'}
        onChange={(e) => selectImage(URL.createObjectURL(e.target.files[0]))}
      />
      <img
        src={
          selectedImage ||
          'https://eleks-demo-app-assets.s3.amazonaws.com/placephoto.jpg'
        }
        onClick={() => ref.current.click()}
      />
    </div>
  );
}
