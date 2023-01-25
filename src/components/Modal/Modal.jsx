import { createPortal } from 'react-dom';
import React, { Component } from 'react';

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
    document.body.addEventListener('keydown', this.modalCloseOnEsc);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.modalCloseOnEsc);
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
