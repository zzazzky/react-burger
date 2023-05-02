import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal(props) {
  return (
    <section className={modalStyles.modal}>
      <div
        className={`${modalStyles.container} ${
          document.documentElement.clientWidth > 1024 ? 'p-10' : 'p-5'
        }`}>
        <div className={modalStyles.titleContainer}>
          <h2 className='text text_type_main-large'>{props.title}</h2>
          <button
            className={`${modalStyles.closeButton} mt-5 mb-5`}
            onClick={props.onClose}>
            <CloseIcon type='primary' />
          </button>
        </div>
        <div className={modalStyles.contentContainer}>{props.children}</div>
      </div>
    </section>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
