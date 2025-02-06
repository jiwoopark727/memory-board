import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyle/>
    <App />
  </BrowserRouter>
);
