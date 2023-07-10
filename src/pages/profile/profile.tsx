import React from 'react';
import profileStyles from './profile.module.css';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from '../../types/hooks';
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { changeUserInfo } from '../../services/actions/user';
import ProfileMenu from '../../components/profile-menu/profile-menu';

type TProfileForm = {
  name: string;
  email: string;
  password: string;
};

const Profile: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const initialEmail = useSelector((store) => store.profile.user.email);
  const initialName = useSelector((store) => store.profile.user.name);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [form, setForm] = useState<TProfileForm>({
    name: initialName !== null ? initialName : '',
    email: initialEmail !== null ? initialEmail : '',
    password: '',
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsEdit(true);
  };

  const [nameIsAble, setNameIsAble] = useState<boolean>(true);

  function handleEditFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(changeUserInfo(form));
    setIsEdit(false);
  }

  function handleResetForm(e: React.SyntheticEvent<Element, Event>): void {
    e.preventDefault();
    setForm({
      name: initialName !== null ? initialName : '',
      email: initialEmail !== null ? initialEmail : '',
      password: '',
    });
    setIsEdit(false);
  }

  return (
    <div className={profileStyles.container}>
      <section>
        <ProfileMenu />
        <p className='text text_type_main-default text_color_inactive mt-20'>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </section>
      <section>
        <form
          className={profileStyles.form}
          onSubmit={handleEditFormSubmit}>
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
            icon='EditIcon'
            disabled={nameIsAble}
            ref={inputRef}
            onIconClick={() => {
              setTimeout(() => {
                if (inputRef.current !== null) {
                  inputRef.current.focus();
                }
              }, 0);
              setNameIsAble(false);
            }}
            onBlur={() => {
              setNameIsAble(true);
            }}
          />
          <EmailInput
            onChange={onFormChange}
            value={form.email}
            name={'email'}
            isIcon={true}
            placeholder='E-mail'
            extraClass='mb-6'
          />
          <PasswordInput
            onChange={onFormChange}
            value={form.password}
            name='password'
            icon='EditIcon'
            placeholder='Пароль'
            extraClass='mb-6'
          />
          {isEdit && (
            <>
              {isEdit && !form.password && (
                <p className='text text_type_main-default text_color_inactive mb-6'>
                  {' '}
                  Для изменения данных заполните поле пароля
                </p>
              )}
              <div className={profileStyles.buttonContainer}>
                <Button
                  htmlType='submit'
                  type='primary'
                  size='medium'
                  disabled={!form.name || !form.email || !form.password}>
                  Редактировать
                </Button>
                <Button
                  htmlType='reset'
                  type='primary'
                  size='medium'
                  onClick={handleResetForm}>
                  Отменить
                </Button>
              </div>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default Profile;
