import Modal from 'components/Modal/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { imgURL, imgAlt, largeImageURL } = this.props;

    return (
      <>
        <GalleryItem>
          <GalleryItemImg src={imgURL} alt={imgAlt} onClick={this.openModal} />
        </GalleryItem>

        {isModalOpen && (
          <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
