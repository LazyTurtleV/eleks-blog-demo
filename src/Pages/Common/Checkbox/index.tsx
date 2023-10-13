import React from 'react';

import './styles.scss';

export default function Checkbox({ onChange }) {
  return (
    <input
      type={'checkbox'}
      name={'rememberMe'}
      className={'checkbox'}
      onChange={onChange}
    />
  );
}
