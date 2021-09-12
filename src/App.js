import React from 'react';

import { BrowserRouter } from 'react-router-dom';
//import Rodape from './assets/components/Rodape';
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
            <Routes />
            <GlobalStyle />
          </Container>
          {/** <Rodape /> **/}
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
