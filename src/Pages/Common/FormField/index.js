import React from 'react';

import './styles.scss';

export default function FormField({
  type,
  name,
  placeholder,
  errors,
  onChange,
}) {
  return (
    <div className={'input-container'}>
      <input
        name={name}
        type={type}
        autoComplete={'on'}
        placeholder={placeholder}
        onChange={onChange}
        className={errors && 'error'}
      />
      {errors && <p>{errors}</p>}
    </div>
  );
}
