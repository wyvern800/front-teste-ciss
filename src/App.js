import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import ScrollToTop from './assets/components/ScrollToTop';
import Routes from './routes';
import { Container } from 'react-bootstrap';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Container className="main-container">
            <Header />
            <Routes />
            <GlobalStyle />
          </Container>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
