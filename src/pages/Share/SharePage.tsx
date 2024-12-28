import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';
import instagramIcon from '../../assets/instagram.png';
import kakaotalkIcon from '../../assets/kakaotalk.png';
import useUserInfo from '../../store/UserInfo';
import useKakao from '../../api/Share/useKakao';
import useInstagram from '../../api/Share/useInstagram';

const SharePage: React.FC = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { id } = useUserInfo();
  const handleSubmit = async () => {
    const token = cookies.get('access_token');
    if (!token) {
      // 토큰이 없으면 로그인 페이지로 리다이렉트
      console.warn('토큰 없음: 로그인 페이지로 이동');
      navigate('/login');
      return;
    }

    // 토큰이 유효하다고 가정하고 칠판으로 이동
    console.log('토큰 확인 완료, 칠판으로 이동');
    navigate(`/board/${id}`);
  };

  const kakaoShare = useKakao();

  const instagramShare = useInstagram();

  const handleInstagramShare = () => {
    instagramShare(`https://memory-boards.vercel.app/board/${id}`);
  };

  return (
    <ShareContainer>
      <Title />
      <ExplainText>추억 칠판이 생성되었습니다</ExplainText>
      <ExplainText>이제 공유를 해볼까요?</ExplainText>
      <Footer>
        <SubmitButton
          variant='contained'
          type='button'
          onClick={handleInstagramShare}
        >
          <Icon src={instagramIcon} alt='Instagram Icon' />
          인스타그램으로 공유
        </SubmitButton>
        <SubmitButton variant='contained' type='button' onClick={kakaoShare}>
          <Icon src={kakaotalkIcon} alt='Kakaotalk Icon' />
          카카오톡으로 공유
        </SubmitButton>
        <SubmitButton variant='contained' type='button' onClick={handleSubmit}>
          생성된 칠판 보러가기
        </SubmitButton>
        <StyledLink to='/dev'>개발자 소개 보러가기</StyledLink>
      </Footer>
    </ShareContainer>
  );
};

// Styled Components
const ShareContainer = styled.div`
  height: 100dvh; /* 화면 높이를 꽉 채움 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  background-image: url(${bg0});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Footer = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  && {
    display: flex;
    justify-content: space-evenly;
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

const Icon = styled.img`
  width: 20px; /* 아이콘 크기 */
  height: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 20px 5px;
  color: white;
`;

const ExplainText = styled.div`
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 350px;
`;

export default SharePage;
