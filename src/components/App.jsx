import { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import { fetchGallery } from 'services/pixabay-service';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const searchQueryUpdate = newSearchQuery => {
    const normalizedSearchQuery = newSearchQuery.toLowerCase().trim();

    setSearchQuery(normalizedSearchQuery);
    setCurrentPage(1);
    setGallery([]);
  };

  const currentPageUpdate = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  useEffect(() => {
    const updateGalleryState = async () => {
      try {
        setShowLoader(true);
        setShowBtn(false);
        const response = await fetchGallery(searchQuery, currentPage);

        if (response.data.totalHits > 0) {
          setGallery(prevState => {
            return [...prevState, ...response.data.hits];
          });
          setShowBtn(currentPage < Math.ceil(response.data.totalHits / 12));
        } else {
          Notiflix.Notify.info('There is nothing here with that name.');
        }
      } catch (error) {
        Notiflix.Notify.failure(`Something went wrong.`);
      } finally {
        setShowLoader(false);
      }
    };

    if (searchQuery) {
      updateGalleryState();
    }
  }, [searchQuery, currentPage]);

  return (
    <>
      <Searchbar searchQueryUpdate={searchQueryUpdate} />

      <ImageGallery
        query={searchQuery}
        page={currentPage}
        galleryItems={gallery}
      />

      {showBtn && <Button currentPageUpdate={currentPageUpdate} />}

      {showLoader && <Loader />}
    </>
  );
};

export default App;
