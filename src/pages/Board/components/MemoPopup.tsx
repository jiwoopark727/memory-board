import React from 'react';
import styled from 'styled-components';
import memoImages from '../../../assets/memo';

interface MemoPopupProps {
  isOpen: boolean;
  memoText: string;
  author: string;
  onClose: () => void;
  bgNum?: number; // 메모 배경 이미지
}

const MemoPopup: React.FC<MemoPopupProps> = ({
  isOpen,
  memoText,
  author,
  bgNum,
  onClose,
}) => {
  if (!isOpen) return null;

  const backgroundImage = bgNum !== undefined ? memoImages[bgNum]?.img : '';

  return (
    <Overlay onClick={onClose}>
      <PopupContainer
        $background={backgroundImage}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>X</CloseButton>
        <MemoContent>{memoText}</MemoContent>
        <MemoAuthor>- {author} -</MemoAuthor>
      </PopupContainer>
    </Overlay>
  );
};

export default MemoPopup;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div<{ $background: string }>`
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
  width: 350px;
  height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const MemoContent = styled.p`
  position: absolute;
  top: 40%;
  width: 80%;
  height: 200px;
  margin-top: -60px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0);
  resize: none;
  text-align: center;
`;

const MemoAuthor = styled.p`
  position: absolute;
  bottom: 20px;
  width: 50%;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0);
  text-align: center;
  color: gray;
`;
