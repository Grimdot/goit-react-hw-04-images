import Notiflix from 'notiflix';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import {
  PageHeader,
  SearchbarButton,
  SearchbarForm,
  SearchbarInput,
  InputWrap,
  SearchbarButtonIcn,
} from './Searchbar.styled';

const headerRoot = document.querySelector('#header-root');

export default class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQueryUpdate } = this.props;
    const { searchQuery } = this.state;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    searchQuery
      ? searchQueryUpdate(searchQuery)
      : Notiflix.Notify.info('Please input something');

    this.inputReset();
  };

  inputReset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return createPortal(
      <PageHeader>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <InputWrap>
            <SearchbarButton type="submit">
              <SearchbarButtonIcn />
            </SearchbarButton>

            <SearchbarInput
              type="text"
              name="searchQuery"
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
              className="search-form-input"
              value={searchQuery}
              onChange={this.handleInput}
            />
          </InputWrap>
        </SearchbarForm>
      </PageHeader>,

      headerRoot
    );
  }
}
