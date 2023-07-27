import React from 'react';
import modalOverlayStyles from './modal-overlay.module.css';

interface IModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay: React.FC<IModalOverlayProps> = (props) => {
  return (
    <div
      className={modalOverlayStyles.overlay}
      onClick={props.onClose}
      data-cy='overlay'
    />
  );
};

export default ModalOverlay;
