import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalImage, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  modalCloseOnClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  modalCloseOnEsc = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.modalCloseOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalCloseOnEsc);
  }

  render() {
    const { largeImageURL, imgAlt } = this.props;

    return createPortal(
      <Backdrop onClick={this.modalCloseOnClick}>
        <ModalWindow>
          <ModalImage src={largeImageURL} alt={imgAlt} />
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
};
