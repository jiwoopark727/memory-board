import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BoardPage from './components/BoardPage';
import memoImages from '../../assets/memo';
import useMemoValid from '../../api/Board/useMemoValid';
import useUserInfo from '../../store/UserInfo';

const CreateMemoPage = () => {
  const { id } = useParams<{ id: string }>();
  const { setAuthor, setContent, setBgMemo } = useUserInfo();
  const memoValid = useMemoValid();

  const [memoNum, setMemoNum] = useState(memoImages[0].num);
  const [memoText, setLocalMemoText] = useState('');
  const [nickname, setLocalNickname] = useState('');
  const [memoError, setMemoError] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const selectedMemo = memoImages.find((image) => image.num === memoNum);
  console.log(memoNum);

  const handleSubmit = async () => {
    try {
      if (!id) {
        throw new Error('보드 ID 누락');
      }
      if (!memoText) {
        setMemoError('메모를 입력해 주세요');
        return;
      } else if (!nickname) {
        setMemoError('닉네임을 입력해 주세요');
        return;
      } else {
        setAuthor(nickname);
        setContent(memoText);
        setBgMemo(memoNum);

        console.log('데이터 저장 완료:', { id, nickname, memoText });

        await memoValid(id, nickname, memoText);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMemoError(error.message);
      } else {
        setMemoError('예상치 못한 오류가 발생했습니다.');
      }
    }
  };

  return (
    <CreateContainer>
      <BoardPage onSubmit={handleSubmit} />
      <SelectedMemoContainer>
        {selectedMemo && (
          <SelectedMemoImageWrapper>
            <SelectedMemoImage src={selectedMemo.img} alt='선택된 메모' />
            <MemoTextInput
              placeholder='여기에 글을 작성하세요...'
              value={memoText}
              onChange={(e) => setLocalMemoText(e.target.value)}
            />
            <NicknameInput
              placeholder='닉네임 입력'
              value={nickname}
              onChange={(e) => setLocalNickname(e.target.value)}
            />
          </SelectedMemoImageWrapper>
        )}
        {<ErrorText>{memoError || ' '}</ErrorText>}
      </SelectedMemoContainer>

      <BackgroundSlide>
        <Slider {...sliderSettings}>
          {memoImages.map((image, index) => (
            <SlideItem key={index} onClick={() => setMemoNum(image.num)}>
              <img src={image.img} alt={`bg${index + 1}`} />
            </SlideItem>
          ))}
        </Slider>
      </BackgroundSlide>
    </CreateContainer>
  );
};
export default CreateMemoPage;

const CreateContainer = styled.div`
  height: 100dvh; /* 화면 높이를 꽉 채움 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SelectedMemoContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const SelectedMemoImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedMemoImage = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 12px;
`;

const BackgroundSlide = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 33px;
  background: rgba(0, 0, 0, 0.6);

  .slick-prev {
    z-index: 10;
    color: white;
  }
  .slick-next {
    z-index: 10;
    color: white;
  }

  .slick-dots li button:before {
    color: white;
  }
`;

const SlideItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 98%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(0.95);
    }
  }
`;
const MemoTextInput = styled.textarea`
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

const NicknameInput = styled.input`
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
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
  min-height: 1.2rem;
`;
