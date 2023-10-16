import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useFormik, FormikProps, FormikErrors } from 'formik';

import styles from '../Login/styles.module.scss';

import FormContainer from '../Common/FormContainer';
import FormField from '../Common/FormField';

type State = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  repeatPassword: Yup.string().required('Repeat password is required'),
});

export default function Signup() {
  const navigate = useNavigate();
  const formik: FormikProps<State> = useFormik<State>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: ValidationSchema,
    validate: (values: State) => {
      const errors: FormikErrors<State> = {};

      if (values.password !== values.repeatPassword) {
        errors.repeatPassword = 'Passwords do not match';
      }
    },
    onSubmit: () => {
      navigate('/login');
    }
  });

  return (
    <FormContainer>
      <form className={styles['login-form']} onSubmit={formik.handleSubmit}>
        <h1>Create an account</h1>
        <InlineInput
          label={'Name'}
          name={'name'}
          type={'text'}
          placeholder={'Enter your name'}
          errors={formik.errors.name}
          onChange={formik.handleChange}
        />
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
          placeholder={'Enter your password'}
          errors={formik.errors.password}
          onChange={formik.handleChange}
        />
        <InlineInput
          label={'Repeat password'}
          type={'password'}
          name={'repeatPassword'}
          placeholder={'Re-enter your password'}
          errors={formik.errors.repeatPassword}
          onChange={formik.handleChange}
        />
        <input type={'submit'} value={'Create an account'} />
        <section className={styles.additionalButtons}>
          <input
            type={'button'}
            value={'I already have an account'}
            onClick={() => navigate('/login')}
          />
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
        errors={errors}
        placeholder={placeholder}
        onChange={onChange}
      />
    </span>
  );
}
