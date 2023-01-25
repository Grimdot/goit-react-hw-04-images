import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ currentPageUpdate }) => {
  return (
    <LoadMoreBtn type="button" onClick={currentPageUpdate}>
      Load more
    </LoadMoreBtn>
  );
};

export default Button;

Button.propTypes = {
  currentPageUpdate: PropTypes.func,
};
