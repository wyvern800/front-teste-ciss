import React, { Component } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

import logo from '../../img/logo2.png';

export default class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <Link to="/"><img src={logo} /></Link>
        </Container>
      </>
    );
  }
}
