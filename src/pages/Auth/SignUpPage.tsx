import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';

const SignUpPage: React.FC = () => {
  return (
    <SignUpContainer>
      <Title />
      <SignUpForm />
      <Footer>
        <StyledLink to='/login'>
          칠판을 확인하고 싶나요? 로그인하러 가기
        </StyledLink>
      </Footer>
    </SignUpContainer>
  );
};

// Styled Components
const SignUpContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  background-image: url(${bg0});
  background-size: 100% 100%; /* 화면을 꽉 채우기 */
  background-position: center;
  background-repeat: no-repeat;
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

export default SignUpPage;
