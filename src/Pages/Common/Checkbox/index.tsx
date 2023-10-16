import React from 'react';

import './styles.scss';

type CheckboxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ onChange }: CheckboxProps) {
  return (
    <input
      type={'checkbox'}
      name={'rememberMe'}
      className={'checkbox'}
      onChange={onChange}
    />
  );
}
