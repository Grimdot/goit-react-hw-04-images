import axios from 'axios';

const API_KEY = '31815472-6ffac1728c09639d971d276fb';
const CARDS_PER_PAGE = 12;

const apiParams = `&image-type=photo&orientation=horizontal&safesearch=true&per_page=${CARDS_PER_PAGE}`;
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchGallery = async (searchQuery, currentPage) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}${apiParams}&page=${currentPage}`
  );

  return response;
};
