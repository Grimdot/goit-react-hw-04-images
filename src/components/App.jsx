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
    gallery: [],
    showBtn: false,
    showLoader: false,
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

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ showBtn: false, showLoader: true });

      try {
        const response = await fetchGallery(searchQuery, currentPage);

        if (response.data.totalHits > 0) {
          this.setState(prevState => {
            return {
              gallery: [...prevState.gallery, ...response.data.hits],
              showBtn: currentPage < Math.ceil(response.data.totalHits / 12),
            };
          });
        } else {
          Notiflix.Notify.info('There is nothing here with that name.');
        }
      } catch (error) {
        Notiflix.Notify.failure(`Something went wrong.`);
      } finally {
        this.setState({ showLoader: false });
      }
    }
  }

  render() {
    const { searchQuery, currentPage, showLoader, gallery, showBtn } =
      this.state;

    return (
      <>
        <Searchbar searchQueryUpdate={this.searchQueryUpdate} />

        <ImageGallery
          query={searchQuery}
          page={currentPage}
          galleryItems={gallery}
        />

        {showBtn && <Button currentPageUpdate={this.currentPageUpdate} />}

        {showLoader && <Loader />}
      </>
    );
  }
}
