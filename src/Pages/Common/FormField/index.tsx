import React from 'react';

import './styles.scss';

type FormFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string;
}

export default function FormField({
  type,
  name,
  placeholder,
  errors,
  onChange,
}: FormFieldProps) {
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

type InlineInputProps = Partial<FormFieldProps> & {
  label: string;
};

export function InlineInput({
  label,
  type = 'text',
  name = '',
  placeholder = '',
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
  errors,
}: InlineInputProps) {
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
