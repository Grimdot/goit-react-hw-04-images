import styled from 'styled-components';

export const GalleryItem = styled.li`
  list-style: none;
  transition: transform, ease-in-out, 250ms;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const GalleryItemImg = styled.img`
  width: 400px;
  height: 280px;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
