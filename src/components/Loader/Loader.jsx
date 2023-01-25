import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrap } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerWrap>
      <RotatingLines strokeColor="cadetblue" strokeWidth="3" width="60" />
    </SpinnerWrap>
  );
};

export default Loader;
