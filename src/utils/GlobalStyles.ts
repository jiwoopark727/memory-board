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

  :root {
    --app-height: 100vh;
  }


  html, body {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    margin: 0;
    padding: 0;
    height: var(--app-height); /* 동적 높이 적용 */
    width: 100%;
    overflow: hidden; /* 스크롤 방지 */
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%; /* 모바일 확대 방지 */
    touch-action: manipulation; /* 터치 확대 방지 */
    overscroll-behavior: none; /* 스크롤 넘침 방지 */
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; /* 동적 높이 */
    overflow: hidden; /* 내부 스크롤 방지 */
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