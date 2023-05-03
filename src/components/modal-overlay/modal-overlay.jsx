import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay(props) {
  return (
    <div
      className={modalOverlayStyles.overlay}
      onClick={props.onClose}
    />
  );
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
