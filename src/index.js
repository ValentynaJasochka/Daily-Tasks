import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Layout } from 'components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'components/GlobalStyles';

const theme = {
  colors: {
    red: 'rgb(235, 15, 88)',
    green: 'rgb(20, 136, 41)',
    yellow: 'rgb(224, 237, 49)',
    darkBlue: 'rgb(83, 16, 205)',
    lightBlue: 'rgb(146, 237, 244)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/Daily-Tasks">
      
          <App />
      <GlobalStyles/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
