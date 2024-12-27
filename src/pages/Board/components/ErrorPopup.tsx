import React from 'react';
import styled from 'styled-components';

interface ErrorPopupProps {
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
  return (
    <ErrorPopupContainer>
      <ErrorPopupBox>
        <CloseButton onClick={onClose}>x</CloseButton>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorPopupBox>
    </ErrorPopupContainer>
  );
};

export default ErrorPopup;

const ErrorPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorPopupBox = styled.div`
  background-color: white;
  width: 70%;
  height: 20%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  text-align: center;
  position: absolute;
`;

const CloseButton = styled.div`
  position: relative;
  font-size: 30px;
  top: -20px;
  right: -115px;
  cursor: pointer;
  padding-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
`;
