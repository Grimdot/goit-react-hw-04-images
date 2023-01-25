import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px auto;
  width: 160px;
  height 40px;

  font-size 22px;
  border-radius: 4px;
  color: white;
  background-color: cadetblue;
  border-color: cadetblue;
  transition: color, ease-in-out, 250ms;

  &:hover,
  &:focus {
    color: cadetblue;
    background-color: white;
  }

  &:active{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
