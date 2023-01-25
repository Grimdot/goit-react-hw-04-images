import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 50px;
  background-color: cadetblue;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.5);

  z-index: 9999999;
`;

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const SearchbarInput = styled.input`
  width: 400px;
  height: 30px;

  font-size: 20px;
  border-radius: 6px;
  border-color: cadetblue;
  padding-left: 35px;
`;

export const SearchbarButton = styled.button`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-47%);

  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
`;

export const SearchbarButtonIcn = styled(BsSearch)`
  width: 20px;
  height: 20px;
  transition: color, ease-in-out, 250ms;

  &:hover,
  &:focus {
    color: cadetblue;
    background-color: white;
  }

  &:active {
    color: black;
  }
`;
