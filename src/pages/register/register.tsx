import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  EmailInput,
  PasswordInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import MainForm from '../../components/main-form/main-form';
import { register } from '../../services/actions/auth';
import { TypedDispatch } from '../../types/thunk-dispatch-types';
import { Istore } from '../../types/store-interface';

const Register: React.FC = () => {
  const dispatch = useDispatch<TypedDispatch>();

  const isError = useSelector<Istore, boolean>(
    (store) => store.profile.authRequest.isAuthRequestFailed
  );

  const [form, setForm] = useState<{
    name: string;
    email: string;
    password: string;
  }>({ name: '', email: '', password: '' });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleRegisterForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(
      register({ name: form.name, email: form.email, password: form.password })
    );
  }

  const underText: React.ReactNode = (
    <p className='text text_type_main-default text_color_inactive'>
      Уже зарегистрированы?
      <Link
        className='link ml-2'
        to='/login'>
        Войти
      </Link>
    </p>
  );

  return (
    <>
      <MainForm
        title='Регистрация'
        button='Зарегистрироваться'
        onSubmit={handleRegisterForm}
        underText={underText}
        disabled={!form.name || !form.email || !form.password}>
        <Input
          type={'text'}
          placeholder='Имя'
          onChange={onFormChange}
          value={form.name}
          name='name'
          error={false}
          errorText='Ошибка'
          size='default'
          extraClass='mb-6'
        />
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
          name='password'
          icon='ShowIcon'
          placeholder='Пароль'
          extraClass='mb-6'
        />
        <p className='text text_type_main-default text_color_inactive mb-6'>
          {isError && 'Что-то пошло не так, попробуйте еще раз'}
        </p>
      </MainForm>
    </>
  );
};

export default Register;
