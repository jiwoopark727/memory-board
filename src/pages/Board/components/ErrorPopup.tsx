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
        <CloseButton onClick={onClose}>×</CloseButton>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorPopupBox>
    </ErrorPopupContainer>
  );
};

export default ErrorPopup;

// Styled Components
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
  z-index: 1000; /* 항상 최상단에 표시 */
`;

const ErrorPopupBox = styled.div`
  background-color: white;
  width: 70%;
  max-width: 400px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  position: relative; /* CloseButton의 위치 조정을 위해 relative 설정 */
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px; /* 팝업 박스의 상단으로부터 10px */
  right: 10px; /* 팝업 박스의 우측으로부터 10px */
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
`;