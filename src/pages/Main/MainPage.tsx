import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
      <BetaTestNotice>
        2025년 1월 5일까지 진행되는 베타테스트입니다 :)
        <br />
        정식 버전으로 곧 다시 찾아뵐게요. 감사합니다!
      </BetaTestNotice>
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
      <StyledLink to='/menual'>서비스 사용법 알아보기</StyledLink>
      <StyledLink to='/dev'>
        개발자 소개 보러가기
        <br />
        <br />
      </StyledLink>
      <StyledLink to='/mail'>
        💡궁금한 점이 있다면?
        <br />
        <br />
        문의 메일: dldlsrb1414@gmail.com <br />
      </StyledLink>
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

const BetaTestNotice = styled.div`
  font-size: 14px;
  color: white; /* 흰색 텍스트 */
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 20px 5px 5px 5px;
  color: white;
  text-align: center;
`;

export default MainPage;
