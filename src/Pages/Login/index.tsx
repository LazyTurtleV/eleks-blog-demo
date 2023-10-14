import React, { useCallback, useEffect, useReducer } from 'react';

import styles from './styles.module.scss';

import FormContainer from '../Common/FormContainer';
import { useAuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../Common/FormField';
import Checkbox from '../Common/Checkbox';
import useValidation from '../Common/useValidation';

const ACTION_TYPES = {
  EMAIL_CHANGE: 'email',
  PASSWORD_CHANGE: 'password',
  ERROR: 'error',
};

function reducer(state: any, action: any) {
  if (Object.values(ACTION_TYPES).includes(action.type)) {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }

  return state;
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, {});
  const { handleSubmit, errors = {} } = useValidation(state, [
    'email',
    'password',
  ]);
  const { login, subscribeOnError, isAuthorized }: any = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line no-alert
    subscribeOnError(() => window.alert('Error: wrong credentials'));
  }, [subscribeOnError]);

  const onEmailChange = useCallback((e: any) => {
    dispatch({ type: ACTION_TYPES.EMAIL_CHANGE, payload: e.target.value });
  }, []);
  const onPasswordChange = useCallback((e: any) => {
    dispatch({ type: ACTION_TYPES.PASSWORD_CHANGE, payload: e.target.value });
  }, []);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      login(state.email, state.password);
    },
    [state, login]
  );

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized, navigate]);

  return (
    <FormContainer>
      <form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
        <h1>Log in</h1>
        <InlineInput
          label={'Email'}
          name={'email'}
          type={'email'}
          placeholder={'Enter your email'}
          errors={errors.email}
          onChange={onEmailChange}
        />
        <InlineInput
          label={'Password'}
          type={'password'}
          name={'password'}
          errors={errors.password}
          onChange={onPasswordChange}
          placeholder={'Enter your password'}
        />
        <CheckboxControl />
        <input type={'submit'} value={'Log in'} />
        <section className={styles.additionalButtons}>
          <input
            type={'button'}
            value={'Sign up'}
            onClick={() => navigate('../signup')}
          />
          <input type={'button'} value={'Forgot password?'} />
        </section>
      </form>
    </FormContainer>
  );
}

function InlineInput({ label, type, name, placeholder, onChange, errors }: any) {
  return (
    <span className={styles['inline-controll']}>
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

function CheckboxControl({ onChange }: any) {
  return (
    <span className={styles['checkbox-controll']}>
      <Checkbox />
      <label>Remember me</label>
    </span>
  );
}