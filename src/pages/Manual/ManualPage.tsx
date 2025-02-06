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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ManualPage = () => {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const navigate = useNavigate();
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentPage(newIndex);
    },
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

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <ManualContainer>
      <PrevButton onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevButton>

      <ManualPageNum>{currentPage + 1} / 10</ManualPageNum>
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
      <Footer>
        <StyledLink to='/signup'>
          이제 사용법을 알았으면? 칠판 만들러 가기
        </StyledLink>
      </Footer>
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
  padding-top: 11dvh;
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
    right: 30px;
    font-size: 40px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: hotpink;
    font-size: 30px;
  }

  .slick-dots li button:before {
    color: yellow;
    font-size: 12px;
  }

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
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
`;

const PrevButton = styled.button`
  position: absolute;
  left: 0;
  margin-left: 25px;
  margin-top: 25px;
  background: none;
  border: none;
  color: white;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const Footer = styled.div`
  font-size: 17px;
  text-align: center;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 5px;
  color: white;
`;

const ManualPageNum = styled.div`
  position: absolute;
  left: 42%;
  top: 7dvh;
  text-align: center;
  color: black;
  font-size: 17px;
  margin-bottom: 5px;
  background: #ffffff;
  border-radius: 28px;
  width: 70px;
  box-sizing: border-box;
`;
