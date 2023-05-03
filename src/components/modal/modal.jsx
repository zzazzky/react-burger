import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

function Modal(props) {
  function handleEscDown(e) {
    e.key === 'Escape' && props.onClose();
  }

  const modalRoot = document.getElementById('react-modals');

  useEffect(() => {
    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, []);

  return createPortal(
    <section className={modalStyles.modal}>
      <div className={`${modalStyles.container} p-10`}>
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
      <ModalOverlay onClose={props.onClose} />
    </section>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
