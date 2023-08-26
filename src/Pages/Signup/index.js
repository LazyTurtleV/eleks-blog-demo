import React from 'react';

import './styles.scss';
import FormContainer from '../Common/FormContainer';

export default function Signup() {
  return (
    <FormContainer>
      <form>
        <form className={'login-form'}>
          <h1>Create an account</h1>
          <InlineInput
            label={'Email'}
            name={'email'}
            type={'email'}
            placeholder={'Enter your email'}
          />
          <InlineInput
            label={'Password'}
            type={'password'}
            name={'password'}
            placeholder={'Enter your password'}
          />
          <input type={'submit'} value={'Create an account'} />
          <input type={'button'} value={'I already have an account'} />
        </form>
      </form>
    </FormContainer>
  );
}

function InlineInput({ label, type, name, placeholder, onChange }) {
  return (
    <span className={'inline-controll'}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </span>
  );
}
