import React, { Component } from 'react';
import { DivLoader } from './styles';
import Spinner from 'react-bootstrap/Spinner';

export default class Loading extends Component {
  render() {
    return (
      <>
        <DivLoader>
          <Spinner animation="border" role="status" variant="secondary"/>
          Carregando...
        </DivLoader>
      </>
    );
  }
}
