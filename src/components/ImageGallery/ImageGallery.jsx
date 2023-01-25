import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ galleryItems }) => {
  return (
    <Gallery>
      {galleryItems &&
        galleryItems.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              imgURL={webformatURL}
              imgAlt={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
    </Gallery>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
