import Notiflix from 'notiflix';
import { useState } from 'react';
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

const SearchForm = ({ searchQueryUpdate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'searchQuery':
        setSearchQuery(inputValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    searchQuery
      ? searchQueryUpdate(searchQuery)
      : Notiflix.Notify.info('Please input something');

    inputReset();
  };

  const inputReset = () => {
    setSearchQuery('');
  };

  return createPortal(
    <PageHeader>
      <SearchbarForm onSubmit={handleSubmit}>
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
            onChange={handleInput}
          />
        </InputWrap>
      </SearchbarForm>
    </PageHeader>,

    headerRoot
  );
};

export default SearchForm;
