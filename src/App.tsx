import { Routes, Route } from 'react-router-dom';
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
    </ThemeProvider>
  );
}

export default App;
