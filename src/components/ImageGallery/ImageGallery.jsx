import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

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
