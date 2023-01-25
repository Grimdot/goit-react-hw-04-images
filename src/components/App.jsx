import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import { fetchGallery } from 'services/pixabay-service';

export default class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    status: 'idle',
    gallery: [],
  };

  setStatus = statusName => {
    this.setState({ status: statusName });
  };

  searchQueryUpdate = newSearchQuery => {
    const normalizedSearchQuery = newSearchQuery.toLowerCase().trim();

    this.setState({
      searchQuery: normalizedSearchQuery,
      currentPage: 1,
      gallery: [],
    });
  };

  currentPageUpdate = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  showBtn = false;

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.setStatus('pending');

      try {
        const response = await fetchGallery(searchQuery, currentPage);

        if (response.data.totalHits > 0) {
          this.setState(prevState => {
            return { gallery: [...prevState.gallery, ...response.data.hits] };
          });

          this.showBtn = currentPage < Math.ceil(response.data.totalHits / 12);
          this.setStatus('resolved');
        } else {
          Notiflix.Notify.info('There is nothing here with that name');

          this.setStatus('rejected');
        }
      } catch (error) {
        Notiflix.Notify.failure('Something went wrong');

        this.setStatus('rejected');
      }
    }
  }

  render() {
    const { searchQuery, currentPage, status, gallery } = this.state;

    return (
      <>
        <Searchbar searchQueryUpdate={this.searchQueryUpdate} />

        <ImageGallery
          query={searchQuery}
          page={currentPage}
          setStatus={this.setStatus}
          galleryItems={gallery}
        />

        {status === 'resolved' && this.showBtn && (
          <Button currentPageUpdate={this.currentPageUpdate} />
        )}
        {status === 'pending' && <Loader />}
      </>
    );
  }
}
