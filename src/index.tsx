import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { GlobalStyle } from './components/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/movies-find-application">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster position="top-right" />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
