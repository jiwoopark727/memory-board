import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';

const SignUpPage: React.FC = () => {
  useEffect(() => {
    alert('비밀번호 찾기가 불가하니 꼭 기억해주세요!');
  }, []);
  return (
    <SignUpContainer>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
      <SignUpForm />
      <Footer>
        <StyledLink to='/login'>
          칠판을 확인하고 싶나요? 로그인하러 가기
        </StyledLink>
      </Footer>
      <StyledLink2 to='/manual'>서비스 사용법 알아보기</StyledLink2>
    </SignUpContainer>
  );
};

const TitleWrapper = styled.div`
  margin-top: -20px;
  margin-bottom: -35px;
`;

const SignUpContainer = styled.div`
  height: 100dvh; /* 화면 높이를 꽉 채움 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 20px 5px 5px 5px;
  color: white;
`;

const StyledLink2 = styled(Link)`
  text-decoration: none;
  margin: 20px 5px 5px 5px;
  color: white;
`;

export default SignUpPage;
