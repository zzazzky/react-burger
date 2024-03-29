import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from '../../types/hooks';
import MainForm from '../../components/main-form/main-form';
import {
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from '../../services/actions/auth';

type TLoginForm = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const isError = useSelector(
    (store) => store.profile.authRequest.isAuthRequestFailed
  );

  const [form, setForm] = useState<TLoginForm>({
    email: '',
    password: '',
  });
  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleLoginForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(login({ email: form.email, password: form.password }));
  }

  const underText: React.ReactNode = (
    <>
      <p className='text text_type_main-default text_color_inactive'>
        Вы — новый пользователь?
        <Link
          className='link ml-2'
          to='/register'>
          Зарегистрироваться
        </Link>
      </p>
      <p className='text text_type_main-default text_color_inactive mt-4'>
        Забыли пароль?
        <Link
          className='link ml-2'
          to='/forgot-password'>
          Восстановить пароль
        </Link>
      </p>
    </>
  );

  return (
    <>
      <MainForm
        title='Вход'
        button='Войти'
        onSubmit={handleLoginForm}
        underText={underText}
        disabled={!form.email || !form.password}>
        <EmailInput
          onChange={onFormChange}
          value={form.email}
          name={'email'}
          isIcon={false}
          placeholder='E-mail'
          extraClass='mb-6'
        />
        <PasswordInput
          onChange={onFormChange}
          value={form.password}
          name={'password'}
          icon='ShowIcon'
          extraClass='mb-6'
        />
        <p className='text text_type_main-default text_color_inactive'>
          {isError && 'Что-то пошло не так, попробуйте еще раз'}
        </p>
      </MainForm>
    </>
  );
};

export default Login;
