import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SejongGeulggot';
    src: url('/fonts/SejongGeulggot.woff2') format('woff2'),
         url('/fonts/SejongGeulggot.woff') format('woff'),
         url('/fonts/SejongGeulggot.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%; /* 화면 전체를 차지 */
    overflow: hidden; /* 스크롤 방지 */
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; /* 텍스트 부드럽게 렌더링 */
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%; /* 모바일 확대 방지 */
  }

  #root {
    width: 100%; /* 전체 너비 */
    height: 100%; /* 전체 높이 */
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'SejongGeulggot', Arial, sans-serif;
    box-sizing: border-box;
  }

  input, textarea, button {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;