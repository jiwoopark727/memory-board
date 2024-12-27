import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';
import GlobalStyle from './utils/GlobalStyles';
import theme from './utils/theme';

//Pages
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import MainPage from './pages/Main/MainPage';
import SharePage from './pages/Share/SharePage';
import CreatePage from './pages/Board/CreatePage';
import MyPage from './pages/Board/MyPage';
import CreateMemoPage from './pages/Board/CreateMemoPage';
import SelectMemoPage from './pages/Board/SelectMemoPage';
import DevPage from './pages/Dev/DevPage';

interface RouteConfig {
  element: JSX.Element;
  path: string;
  private?: boolean;
}

function App(): JSX.Element {
  const routes: RouteConfig[] = [
    { path: '/', element: <MainPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignUpPage /> },
    { path: '/share', element: <SharePage /> },
    { path: '/board/create', element: <CreatePage /> },
    { path: `/board/:id`, element: <MyPage /> },
    { path: `/board/memo/create/:id`, element: <CreateMemoPage /> },
    { path: `/board/memo/select/:id`, element: <SelectMemoPage /> },
    { path: `/dev`, element: <DevPage /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Routes>
          {routes.map((route) =>
            route.private ? (
              <Route key={route.path} path={route.path} />
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            )
          )}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.div`
  width: 100vw; /* 전체 화면 너비 */
  height: 100vh; /* 전체 화면 높이 */
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: auto; /* 스크롤 허용 */
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0)
    env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0); /* Safe Area 대응 */
`;

export default App;
