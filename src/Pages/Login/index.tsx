import React, { Reducer, useCallback, useEffect, useReducer } from 'react';
import * as Yup from 'yup';
import { useFormik, FormikProps, FormikErrors } from 'formik';

import styles from './styles.module.scss';

import FormContainer from '../Common/FormContainer';
import { useAuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../Common/FormField';
import Checkbox from '../Common/Checkbox';
import useValidation from '../Common/useValidation';

type State = {
  email: string;
  password: string;
};

const ValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  const navigate = useNavigate();
  const formik: FormikProps<State> = useFormik<State>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: State) => {
      login(values.email, values.password);
    }
  });
  const { login, subscribeOnError, isAuthorized } = useAuthContext();

  useEffect(() => {
    // eslint-disable-next-line no-alert
    subscribeOnError(() => window.alert('Error: wrong credentials'));
  }, [subscribeOnError]);

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized, navigate]);

  return (
    <FormContainer>
      <form className={styles['login-form']} onSubmit={formik.handleSubmit}>
        <h1>Log in</h1>
        <InlineInput
          label={'Email'}
          name={'email'}
          type={'email'}
          placeholder={'Enter your email'}
          errors={formik.errors.email}
          onChange={formik.handleChange}
        />
        <InlineInput
          label={'Password'}
          type={'password'}
          name={'password'}
          errors={formik.errors.password}
          onChange={formik.handleChange}
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

function InlineInput({ label, type, name, placeholder, onChange, errors }: InlineInputProps) {
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

function CheckboxControl({ onChange = (e) => {} }: { onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <span className={styles['checkbox-controll']}>
      <Checkbox onChange={onChange} />
      <label>Remember me</label>
    </span>
  );
}
