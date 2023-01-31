import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalImage, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImageURL, imgAlt, closeModal }) => {
  const modalCloseOnClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const modalCloseOnEsc = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', modalCloseOnEsc);

    return () => {
      window.removeEventListener('keydown', modalCloseOnEsc);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop onClick={modalCloseOnClick}>
      <ModalWindow>
        <ModalImage src={largeImageURL} alt={imgAlt} />
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string,
};
