import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import mainFormStyles from './main-form.module.css';
import PropTypes from 'prop-types';

function MainForm(props) {
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
}

MainForm.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  underText: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default MainForm;
