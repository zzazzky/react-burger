import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../../types/hooks';
import { useState } from 'react';
import {
  PasswordInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import MainForm from '../../components/main-form/main-form';
import { resetPassword } from '../../services/actions/reset-password';

type TResetForm = {
  password: string;
  code: string;
};
const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();

  const isResetSend = useSelector(
    (store) => store.resetPassword.sendResetCodeRequest.isResetCodeSuccess
  );

  const isResetRequest = useSelector(
    (store) => store.resetPassword.sendResetCodeRequest.isResetCodeRequest
  );

  const isError = useSelector(
    (store) => store.resetPassword.resetPasswordRequest.isResetPasswordFailed
  );

  const [form, setForm] = useState<TResetForm>({
    password: '',
    code: '',
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleResetPasswordForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(resetPassword({ password: form.password, token: form.code }));
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

  if (isResetRequest) {
    return null;
  } else {
    return isResetSend ? (
      <>
        <MainForm
          title='Восстановление пароля'
          button='Сохранить'
          onSubmit={handleResetPasswordForm}
          underText={underText}
          disabled={!form.password || !form.code}>
          <PasswordInput
            onChange={onFormChange}
            value={form.password}
            name={'password'}
            icon='ShowIcon'
            placeholder='Введите новый пароль'
            extraClass='mb-6'
          />
          <Input
            type={'text'}
            placeholder='Введите код из письма'
            onChange={onFormChange}
            value={form.code}
            name='code'
            error={false}
            errorText='Ошибка'
            size='default'
            extraClass='mb-6'
          />
          <p className='text text_type_main-default text_color_inactive'>
            {isError && 'Что-то пошло не так, попробуйте еще раз'}
          </p>
        </MainForm>
      </>
    ) : (
      <Navigate
        to='/'
        replace
      />
    );
  }
};

export default ResetPassword;
