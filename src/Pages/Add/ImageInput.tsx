import React, { useRef, useState } from 'react';

import close from '../../../assets/close.svg';

import styles from './styles.module.scss';

export default function ImageInput() {
  const [selectedImage, selectImage] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.articleImage}>
      <input
        ref={ref}
        type={'file'}
        accept={'image/png, image/jpeg'}
        onChange={(e) => e.target.files && selectImage(URL.createObjectURL(e.target.files[0]))}
      />
      {selectedImage ? (
        <div>
          <img className={styles.imagePreview} src={selectedImage} />
          <img
            className={styles.closeIcon}
            src={close}
            onClick={() => selectImage(null)}
          />
        </div>
      ) : (
        <img
          className={styles.inputImage}
          src={'https://eleks-demo-app-assets.s3.amazonaws.com/placephoto.jpg'}
          onClick={() => ref.current && ref.current.click()}
        />
      )}
    </div>
  );
}
