import React from 'react';

import './styles.scss';

export default function FormField({ type, name, placeholder, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
