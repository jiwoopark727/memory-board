import React from 'react';
import styled from 'styled-components';
import stickerImg from '../assets/sticker.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const DevTitle: React.FC = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // 메인 페이지로 리다이렉트
  };

  return (
    <Header>
      <BackButton onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </BackButton>
      <SubtitleContainer>
        <Sticker src={stickerImg} alt='스티커 이미지' />
        <Subtitle>개발자 소개</Subtitle>
      </SubtitleContainer>
    </Header>
  );
};

const Header = styled.div`
  margin: 25px 100px 25px 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const BackButton = styled.button`
  position: absolute;
  left: 0;
  margin-left: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const SubtitleContainer = styled.div`
  position: relative; /* 스티커를 Subtitle 위에 겹치게 하기 위해 relative 설정 */
  display: inline-block; /* 콘텐츠 크기에 맞게 크기를 조정 */
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

const Sticker = styled.img`
  position: absolute;
  top: -25px; /* 적절히 조정 */
  left: -30px; /* 적절히 조정 */
  width: 40px; /* 이미지 크기 조정 */
  height: auto;
`;

export default DevTitle;
