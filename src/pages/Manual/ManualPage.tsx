import styled from 'styled-components';
import bg0 from '../../assets/background/bg-0.png';

const ManualPage = () => {
  return (
    <ManualContainer>
      <div>ManualPage Component</div>
    </ManualContainer>
  );
};
export default ManualPage;

const ManualContainer = styled.div`
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
