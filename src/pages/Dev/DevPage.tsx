import styled from 'styled-components';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/DevTitle';
import pinImage from '../../assets/pin.png';
import githubLogo from '../../assets/github.png';
import linkedInLogo from '../../assets/linked-in.png';
import jeonghoon from '../../assets/dev/jeonghoon.jpg';
import minseo from '../../assets/dev/minseo.jpg';
import ingyu from '../../assets/dev/ingyu.jpg';
import jiwoo from '../../assets/dev/jiwoo.jpg';

const DevPage = () => {
  return (
    <DevContainer>
      <Title />
      <MemberContainer>
        {/* 멤버 목록 */}
        {/* 박지우 */}
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture src={jiwoo} alt='박지우'></Picture>
            <Name>박지우 | Frontend</Name>
          </MemberProfile>
          <LogoLink
            href='https://github.com/jiwoopark727'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={githubLogo} alt='깃헙 로고' />
          </LogoLink>
          <LogoLink
            href='https://www.linkedin.com/in/%EC%A7%80%EC%9A%B0-%EB%B0%95-56a269343/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
        {/* 김정훈 */}
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture src={jeonghoon} alt='김정훈' />
            <Name>김정훈 | Frontend</Name>
          </MemberProfile>
          <LogoLink
            href='https://github.com/jeong011010'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={githubLogo} alt='깃헙 로고' />
          </LogoLink>
          <LogoLink
            href='https://kr.linkedin.com/in/정훈-김-b05009343'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
        {/* 강민서 */}
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture src={minseo} alt='강민서' />
            <Name>강민서 | Backend</Name>
          </MemberProfile>
          <LogoLink
            href='https://github.com/mseo39'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={githubLogo} alt='깃헙 로고' />
          </LogoLink>
          <LogoLink
            href='https://www.linkedin.com/in/민서-강-649663315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
        {/* 이인규 */}
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture src={ingyu} alt='이인규' />
            <Name>이인규 | Backend</Name>
          </MemberProfile>
          <LogoLink
            href='https://github.com/DevelopLee20'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={githubLogo} alt='깃헙 로고' />
          </LogoLink>
          <LogoLink
            href='https://www.linkedin.com/in/인규-이-89b273310 '
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
      </MemberContainer>
      {/* 후원 문구 */}
      <TextBox>
        응원하고 싶으시다면, 커피 한 잔의 여유를 선물해주세요! <br />
        소중한 후원은 서버 운영에 사용됩니다. 감사합니다 :{')'} <br />
        후원계좌 : 국민 720501-01-593819
      </TextBox>
    </DevContainer>
  );
};
export default DevPage;

const DevContainer = styled.div`
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

const MemberContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 35px;
`;

const MemberBox = styled.div`
  position: relative;
`;

const Sticker = styled.img`
  position: absolute;
  top: -15px;
  right: -5px;
  width: 30px;
  height: auto;
`;

const Logo = styled.img`
  margin-left: 1px;
`;

const MemberProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12.5px;
  margin-bottom: 7px;
  width: 135px;
  height: 170px;
  background-color: white;
`;

const Picture = styled.img`
  width: 110px;
  height: 120px;
`;

const Name = styled.div`
  margin-top: 9px;
  font-size: 15px;
  color: black;
`;

const TextBox = styled.div`
  text-align: center;
  margin-top: 10px;
  line-height: 2;
  text-shadow: 2px 2px black;
`;

const LogoLink = styled.a`
  display: inline-block;
  margin-right: 10px;
`;
