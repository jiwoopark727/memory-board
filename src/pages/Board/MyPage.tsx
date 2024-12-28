import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import useBoard from '../../api/Board/useBoard';
import useUserInfo from '../../store/UserInfo';
import BoardPage from './components/BoardPage';

const MyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { setID, is_self } = useUserInfo();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const board = useBoard();

  const loadBoardData = async () => {
    try {
      const data = await board();
      console.log(data);
    } catch (error) {
      console.error('칠판 불러오는 중 오류:', error);
    }
  };

  useEffect(() => {
    if (id) {
      loadBoardData();
    }
  }, [id]);

  const handleLogout = () => {
    cookies.remove('access_token', { path: '/' });
    setID('');
    navigate('/');
  };

  const renderButtons = () =>
    is_self ? (
      <>
        <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
        <StyledButton onClick={() => navigate('/share')}>
          칠판 공유하기
        </StyledButton>
      </>
    ) : (
      <>
        <StyledButton onClick={() => navigate(`/board/memo/create/${id}`)}>
          전 어떤 친구였나요?
        </StyledButton>
        <StyledButton onClick={() => navigate('/signup')}>
          나도 칠판 만들기
        </StyledButton>
      </>
    );

  return (
    <BoardContainer>
      <BoardPage />
      <BoardFooter>{renderButtons()}</BoardFooter>
    </BoardContainer>
  );
};

export default MyPage;

// Styled Components
const BoardContainer = styled.div`
  height: 100dvh; /* 화면 높이를 꽉 채움 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BoardFooter = styled.div`
  width: 100%;
  background: #013c24;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* 화면 높이에 따라 동적 크기 조정 */
  height: 20vh; /* 화면 높이의 15% */
  min-height: 130px; /* 최소 높이는 100px */

  /* 하단 안전 영역을 고려 */
  padding-bottom: env(safe-area-inset-bottom, 10px);
`;

const StyledButton = styled.button`
  width: 80%;
  max-width: 300px;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  margin: 5px 0;
  color: #013c24;
  background: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #016340;
  }
`;
