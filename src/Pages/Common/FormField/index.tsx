import React from 'react';

import './styles.scss';

export default function FormField({
  type,
  name,
  placeholder,
  errors,
  onChange,
}: any) {
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

export function InlineInput({
  label,
  type,
  name,
  placeholder,
  onChange,
  errors,
}: any) {
  return (
    <span className={'inline-controll'}>
      <label htmlFor={name}>{label}</label>
      <FormField
        name={name}
        type={type}
        placeholder={placeholder}
        errors={errors}
        onChange={onChange}
      />
    </span>
  );
}
