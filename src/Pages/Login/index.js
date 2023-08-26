import React from 'react';

import './styles.scss';

import LoginHeader from './LoginHeader';

export default function Login() {
  return (
    <main className={'login-container'}>
      <div className={'login-box'}>
        <LoginHeader />
        <form className={'login-form'}>
          <h1>Log in</h1>
          <label for={'email'}>Email</label>
          <input name={'email'} type={'email'} />
          <label for={'password'}>Password</label>
          <input name={'password'} type={'password'} />
        </form>
      </div>
    </main>
  );
}
