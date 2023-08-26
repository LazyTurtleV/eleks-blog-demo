import React from 'react';

import './styles.scss';

import FormContainer from '../Common/FormContainer';

function InlineInput({ label, type, name, placeholder }) {
  return (
    <span className={'inline-controll'}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} />
    </span>
  );
}

function Checkbox() {
  return (
    <span className={'checkbox-controll'}>
      <input
        type={'checkbox'}
        name={'rememberMe'}
        className={'checkbox'}
        onChange={() => console.log('quadro')}
      />
      <label>Remember me</label>
    </span>
  );
}

export default function Login() {
  return (
    <FormContainer>
      <form className={'login-form'}>
        <h1>Log in</h1>
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
        <Checkbox />
        <input type={'submit'} value={'Log in'} />
        <input type={'button'} value={'Forgot password?'} />
      </form>
    </FormContainer>
  );
}
