import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchGallery } from 'services/pixabay-service';
import { Gallery } from './ImageGallery.styled';
import Notiflix from 'notiflix';

export default class ImageGallery extends Component {
  state = {
    gallery: [],
  };

  async componentDidUpdate(prevProps) {
    const { query, page, setStatus } = this.props;

    if (prevProps.query !== query) {
      setStatus('pending');

      try {
        const response = await fetchGallery(query, page);

        if (response.data.totalHits > 0) {
          this.setState({ gallery: [...response.data.hits] });

          setStatus('resolved');
        } else {
          Notiflix.Notify.info('There is nothing here with that name');

          setStatus('rejected');
        }
      } catch (error) {
        Notiflix.Notify.failure('Something went wrong');

        setStatus('rejected');
      }
    }

    if (prevProps.query === query && prevProps.page !== page) {
      setStatus('pending');

      try {
        const response = await fetchGallery(query, page);

        this.setState(prevState => {
          return { gallery: [...prevState.gallery, ...response.data.hits] };
        });

        setStatus('resolved');
      } catch (error) {
        Notiflix.Notify.failure('Something went wrong');

        setStatus('rejected');
      }
    }
  }

  render() {
    const { gallery } = this.state;
    return (
      <Gallery>
        {gallery.map(({ id, tags, webformatURL, largeImageURL }) => {
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
  }
}
