import { LoadMoreBtn } from './Button.styled';

const Button = ({ currentPageUpdate }) => {
  return (
    <LoadMoreBtn type="button" onClick={currentPageUpdate}>
      Load more
    </LoadMoreBtn>
  );
};

export default Button;
