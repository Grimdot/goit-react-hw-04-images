import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    status: 'idle',
  };

  setStatus = statusName => {
    this.setState({ status: statusName });
  };

  searchQueryUpdate = newSearchQuery => {
    const normalizedSearchQuery = newSearchQuery.toLowerCase().trim();

    this.setState({ searchQuery: normalizedSearchQuery, currentPage: 1 });
  };

  currentPageUpdate = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  render() {
    const { searchQuery, currentPage, status } = this.state;

    return (
      <>
        <Searchbar searchQueryUpdate={this.searchQueryUpdate} />

        <ImageGallery
          query={searchQuery}
          page={currentPage}
          setStatus={this.setStatus}
        />

        {status === 'resolved' && (
          <Button currentPageUpdate={this.currentPageUpdate} />
        )}
        {status === 'pending' && <Loader />}
      </>
    );
  }
}
