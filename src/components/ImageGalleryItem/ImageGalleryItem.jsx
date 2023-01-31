import Modal from 'components/Modal/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imgURL, imgAlt, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryItem>
        <GalleryItemImg src={imgURL} alt={imgAlt} onClick={openModal} />
      </GalleryItem>

      {isModalOpen && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
