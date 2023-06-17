import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import MainForm from '../../components/main-form/main-form';
import { sendResetCode } from '../../services/actions/reset-password';
import { useSelector, useDispatch } from 'react-redux';

function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isError = useSelector(
    (store) => store.profile.sendResetCodeRequest.isResetCodeFailed
  );

  function handleForgotPasswordForm(e) {
    e.preventDefault();
    dispatch(sendResetCode({ email }));
    navigate('/reset-password');
  }

  const underText = (
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
