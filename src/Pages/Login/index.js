import React, { useCallback, useEffect, useState } from 'react';

import './styles.scss';

import FormContainer from '../Common/FormContainer';
import { useAuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { login, subscribeOnError, isAuthorized } = useAuthContext();

  useEffect(() => {
    // eslint-disable-next-line no-alert
    subscribeOnError(() => window.alert('Error: wrong credentials'));
  }, [subscribeOnError]);

  const changeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const changePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(email, password);
    },
    [email, password, login]
  );

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized, navigate]);

  return (
    <FormContainer>
      <form className={'login-form'} onSubmit={onSubmit}>
        <h1>Log in</h1>
        <InlineInput
          label={'Email'}
          name={'email'}
          type={'email'}
          placeholder={'Enter your email'}
          onChange={changeEmail}
        />
        <InlineInput
          label={'Password'}
          type={'password'}
          name={'password'}
          onChange={changePassword}
          placeholder={'Enter your password'}
        />
        <Checkbox />
        <input type={'submit'} value={'Log in'} />
        <input type={'button'} value={'Forgot password?'} />
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

function Checkbox({ onChange }) {
  return (
    <span className={'checkbox-controll'}>
      <input
        type={'checkbox'}
        name={'rememberMe'}
        className={'checkbox'}
        onChange={onChange}
      />
      <label>Remember me</label>
    </span>
  );
}
