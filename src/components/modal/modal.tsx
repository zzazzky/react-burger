import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = (props) => {
  function handleEscDown(e: { key: string }) {
    e.key === 'Escape' && props.onClose();
  }

  const modalRoot: HTMLElement | null = document.getElementById('react-modals')
    ? document.getElementById('react-modals')
    : null;

  useEffect(() => {
    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, []);

  return modalRoot !== null
    ? createPortal(
        <section className={modalStyles.modal}>
          <div className={`${modalStyles.container} p-10`}>
            <button
              className={`${modalStyles.closeButton} mt-5 mb-5`}
              onClick={props.onClose}>
              <CloseIcon type='primary' />
            </button>
            <div className={modalStyles.contentContainer}>{props.children}</div>
          </div>
          <ModalOverlay onClose={props.onClose} />
        </section>,
        modalRoot
      )
    : null;
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
