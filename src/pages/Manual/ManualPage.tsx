import styled from 'styled-components';
import bg0 from '../../assets/background/bg-0.png';
import manual1 from '../../assets/manual/manual1.png';
import manual2 from '../../assets/manual/manual2.png';
import manual3 from '../../assets/manual/manual3.png';
import manual4 from '../../assets/manual/manual4.png';
import manual5 from '../../assets/manual/manual5.png';
import manual6 from '../../assets/manual/manual6.png';
import manual7 from '../../assets/manual/manual7.png';
import manual8 from '../../assets/manual/manual8.png';
import manual9 from '../../assets/manual/manual9.png';
import manual10 from '../../assets/manual/manual10.png';
import Slider from 'react-slick';

const ManualPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const Images = [
    manual1,
    manual2,
    manual3,
    manual4,
    manual5,
    manual6,
    manual7,
    manual8,
    manual9,
    manual10,
  ];

  return (
    <ManualContainer>
      <SliderWrapper>
        <StyledSlider {...sliderSettings}>
          {Images.map((val, idx) => (
            <SlideItem key={idx}>
              <SlideImage
                src={val}
                alt={`slide-${idx}`}
                className='width: 100%'
              />
            </SlideItem>
          ))}
        </StyledSlider>
      </SliderWrapper>
    </ManualContainer>
  );
};
export default ManualPage;

const ManualContainer = styled.div`
  height: 100dvh; /* 화면 높이를 꽉 채움 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  color: white;

  background-image: url(${bg0});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SliderWrapper = styled.div`
  padding-top: 20dvh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    display: flex;
    justify-content: center;
  }

  .slick-prev {
    left: 20px;
    font-size: 40px;
    z-index: 1;
  }

  .slick-next {
    right: 20px;
    font-size: 40px;
    z-index: 1;
  }

  /* Dots 색상 변경 */
  .slick-dots li button:before {
    color: yellow; /* 기본 점 색상을 흰색으로 */
    font-size: 12px; /* 점 크기 조정 가능 */
  }

  /* 활성화된 dot 색상 */
  .slick-dots li.slick-active button:before {
    color: white;
    opacity: 1;
  }
`;

const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SlideImage = styled.img`
  width: 80%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
`;
