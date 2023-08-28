import React, { useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router';

import './styles.scss';

import FormContainer from '../Common/FormContainer';
import FormField from '../Common/FormField';

import useValidation from '../Common/useValidation';

const ACTION_TYPES = {
  NAME_CHANGE: 'name',
  EMAIL_CHANGE: 'email',
  PASSWORD_CHANGE: 'password',
  REPEAT_PASSWORD_CHANGE: 'repeatPassword',
  ERROR: 'error',
};

function reducer(state, action) {
  if (Object.values(ACTION_TYPES).includes(action.type)) {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }

  return state;
}

export default function Signup() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {});
  const { handleSubmit, errors = {} } = useValidation(
    state,
    ['name', 'email', 'password', 'repeatPassword'],
    (stateProp) => {
      if (stateProp.repeatPassword !== stateProp.password) {
        return {
          repeatPassword: 'The passwords should match',
        };
      }
    }
  );

  const onNameChange = useCallback((e) => {
    dispatch({ type: ACTION_TYPES.NAME_CHANGE, payload: e.target.value });
  }, []);
  const onEmailChange = useCallback((e) => {
    dispatch({ type: ACTION_TYPES.EMAIL_CHANGE, payload: e.target.value });
  }, []);
  const onPasswordChange = useCallback((e) => {
    dispatch({ type: ACTION_TYPES.PASSWORD_CHANGE, payload: e.target.value });
  }, []);
  const onRepeatPasswordChange = useCallback((e) => {
    dispatch({
      type: ACTION_TYPES.REPEAT_PASSWORD_CHANGE,
      payload: e.target.value,
    });
  }, []);

  const submit = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <FormContainer>
      <form className={'login-form'} onSubmit={handleSubmit(submit)}>
        <h1>Create an account</h1>
        <InlineInput
          label={'Name'}
          name={'name'}
          type={'text'}
          placeholder={'Enter your name'}
          errors={errors.name}
          onChange={onNameChange}
        />
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
          placeholder={'Enter your password'}
          errors={errors.password}
          onChange={onPasswordChange}
        />
        <InlineInput
          label={'Repeat password'}
          type={'password'}
          name={'repeatPassword'}
          placeholder={'Re-enter your password'}
          errors={errors.repeatPassword}
          onChange={onRepeatPasswordChange}
        />
        <input type={'submit'} value={'Create an account'} />
        <input
          type={'button'}
          value={'I already have an account'}
          onClick={() => navigate('/login')}
        />
      </form>
    </FormContainer>
  );
}

function InlineInput({ label, type, name, placeholder, onChange, errors }) {
  return (
    <span className={'inline-controll'}>
      <label htmlFor={name}>{label}</label>
      <FormField
        name={name}
        type={type}
        errors={errors}
        placeholder={placeholder}
        onChange={onChange}
      />
    </span>
  );
}
