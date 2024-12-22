import styled from 'styled-components';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/DevTitle';
import pinImage from '../../assets/pin.png';
import githubLogo from '../../assets/github.png';
import linkedInLogo from '../../assets/linked-in.png';

const DevPage = () => {
  return (
    <DevContainer>
      <Title />
      <MemberContainer>
        {/* 멤버 목록 */}
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture></Picture>
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
            href='https://github.com/jiwoopark727'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture></Picture>
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
            href='https://github.com/jeong011010'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture></Picture>
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
            href='https://github.com/mseo39'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Logo src={linkedInLogo} alt='링크드인 로고' />
          </LogoLink>
        </MemberBox>
        <MemberBox>
          <Sticker src={pinImage} alt='스티커 이미지' />
          <MemberProfile>
            <Picture></Picture>
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
            href='https://github.com/DevelopLee20'
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
  height: 100%;
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

const Picture = styled.div`
  width: 110px;
  height: 120px;
  background-color: gray;
`;

const Name = styled.div`
  margin-top: 9px;
  font-size: 15px;
  color: black;
`;

const TextBox = styled.div`
  text-align: center;
  margin-top: 30px;
  line-height: 2;
`;

const LogoLink = styled.a`
  display: inline-block;
  margin-right: 10px;
`;