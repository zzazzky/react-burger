import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import MainForm from '../../components/main-form/main-form';
import { sendResetCode } from '../../services/actions/reset-password';
import { useSelector, useDispatch } from 'react-redux';
import { TypedDispatch } from '../../types/thunk-dispatch-types';
import { Istore } from '../../types/store-interface';

function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch<TypedDispatch>();
  const [email, setEmail] = useState<string>('');
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const isError = useSelector<Istore, boolean>(
    (store) => store.profile.sendResetCodeRequest.isResetCodeFailed
  );

  function handleForgotPasswordForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(sendResetCode({ email }));
    navigate('/reset-password');
  }

  const underText: React.ReactNode = (
    <p className='text text_type_main-default text_color_inactive'>
      Вспомнили пароль?
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
        title='Восстановление пароля'
        button='Восстановить'
        onSubmit={handleForgotPasswordForm}
        underText={underText}
        disabled={!email}>
        <EmailInput
          onChange={onEmailChange}
          value={email}
          name={'email'}
          isIcon={false}
          placeholder='Укажите e-mail'
          extraClass='mb-6'
        />
        <p className='text text_type_main-default text_color_inactive'>
          {isError && 'Что-то пошло не так, попробуйте еще раз'}
        </p>
      </MainForm>
    </>
  );
}

export default ForgotPassword;
