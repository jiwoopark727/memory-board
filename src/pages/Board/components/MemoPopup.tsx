import React from 'react';
import styled from 'styled-components';
import memoImages from '../../../assets/memo';
import CloseIcon from '@mui/icons-material/Close';

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
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
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
  position: relative;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`;


const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #000000;
`;

const MemoContent = styled.p`
  position: absolute;
  top: 40%;
  width: 80%;
  height: 200px;
  margin-top: -50px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0);
  resize: none;
  text-align: center;
  color: #000000; /* 대비되는 색상 */
`;

const MemoAuthor = styled.p`
  position: absolute;
  bottom: 50px;
  width: 50%;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0);
  text-align: center;
  color: gray; /* 대비되는 색상 */
`;
