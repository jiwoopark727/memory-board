import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <Title />
      <LoginForm />
      <Footer>
        <StyledLink to='/signup'>
          칠판을 만들고 싶나요? 회원가입하러 가기
        </StyledLink>
      </Footer>
    </LoginContainer>
  );
};

// Styled Components
const LoginContainer = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 5px;
  color: white;
`;

export default LoginPage;
