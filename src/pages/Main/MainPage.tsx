import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <MainContainer>
      <Title />
      <Footer>
        <SubmitButton
          variant='contained'
          type='button'
          onClick={() => handleNavigate('/signup')}
        >
          칠판 만들기
        </SubmitButton>
        <SubmitButton
          variant='contained'
          type='button'
          onClick={() => handleNavigate('/login')}
        >
          칠판 확인하기
        </SubmitButton>
      </Footer>
    </MainContainer>
  );
};

// Styled Components
const MainContainer = styled.div`
  height: 100dvh; /* 화면 높이를 꽉 채움 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  background-image: url(${bg0});
  background-size: 100% 100%; /* 화면을 꽉 채우기 */
  background-position: center; /* 이미지를 중앙에 위치 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
`;

const Footer = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  && {
    width: 200px;
    margin: 10px;
    color: #013c24;
    border-radius: 30px;
    max-width: 350px;
    background: white;
    font-size: 16px;
    padding: 10px;
    text-transform: none;
  }
`;

export default MainPage;
