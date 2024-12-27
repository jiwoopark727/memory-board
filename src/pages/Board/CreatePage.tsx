import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useUserInfo from '../../store/UserInfo';
import useCreate from '../../api/Board/useCreate';
import backgroundImages from '../../assets/backgrounds';
import BoardPage from './components/BoardPage';

const CreatePage = () => {
  const create = useCreate();
  const { board_name, password, graduated_at, bg_num, setBgNum } =
    useUserInfo();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleSubmit = async () => {
    try {
      await create(board_name, password, bg_num, graduated_at);
      console.log('create 잘 실행');
    } catch (error) {
      console.log('회원가입 중 오류 발생:', error);
    }
  };

  return (
    <CreateContainer $background={backgroundImages[bg_num].img}>
      <BoardPage onSubmit={handleSubmit} />
      <BackgroundSlide>
        <Slider {...sliderSettings}>
          {backgroundImages.map((image, index) => (
            <SlideItem key={index} onClick={() => setBgNum(image.num)}>
              <img src={image.img} alt={`bg${index + 1}`} />
            </SlideItem>
          ))}
        </Slider>
      </BackgroundSlide>
    </CreateContainer>
  );
};
export default CreatePage;

const CreateContainer = styled.div<{ $background: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-image: url(${(props) => props.$background});
  background-size: 100% 100%; /* 화면을 꽉 채우기 */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const BackgroundSlide = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding-left: 32px;
  padding-right: 33px;
  padding-top: 20px;
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
