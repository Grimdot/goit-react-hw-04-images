import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 800px;
  height: 500px;

  background-color: white;
  border-radius: 6px;
  overflow: hidden;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;
