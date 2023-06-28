import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import mainFormStyles from './main-form.module.css';

interface IMainFormProps {
  children: React.ReactNode;
  button: string;
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  underText: React.ReactNode;
  disabled: boolean;
}

const MainForm: React.FC<IMainFormProps> = (props) => {
  return (
    <main className={mainFormStyles.container}>
      <h1 className='text text_type_main-medium'>{props.title}</h1>
      <form
        className={`${mainFormStyles.form} mt-6 mb-20`}
        onSubmit={props.onSubmit}>
        {props.children}
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={props.disabled}>
          {props.button}
        </Button>
      </form>
      {props.underText}
    </main>
  );
};

export default MainForm;
