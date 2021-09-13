import React, { Component } from 'react';
import { FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import FuncionariosList from '../../assets/components/FuncionariosList';

import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <FuncionariosList />
      </Container>
    );
  }
}
