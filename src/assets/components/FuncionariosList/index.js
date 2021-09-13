import React, { Component } from 'react';
import { FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import { Table, Funcionario, NoEntries } from './styles';

import Loading from '../../components/Loading';

import api from '../../../services/api';

export default class FuncionariosList extends Component {
  state = {
    funcionarios: [],
    loading: true,
  };

  /**
   * Deleta o funcionário
   * @param {number} idFuncionario
   */
  remove(container, idFuncionario) {
    // State antes de ser deletado
    const currentFuncionarios = this.state.funcionarios;

    // Remove o item selecionado do state
    this.setState({
      funcionarios: currentFuncionarios.filter(
        (funcionario) => funcionario.id !== idFuncionario
      ),
      loading: true,
    });

    // Deleta of funcionário da API
    api
      .delete(`/funcionarios/${idFuncionario}`)
      .then((response) => {
        if (response.status === 'error') {
          // Opa, algo deu errado, vamos voltar o estado para o que era antes
          this.setState({
            funcionarios: currentFuncionarios,
          });
        } else {
          toastr.options = {
            positionClass: 'toast-top-full-width',
            hideDuration: 300,
            timeOut: 60000,
          };
          toastr.clear();
          setTimeout(() => toastr.success(`Settings updated`), 300);
        }
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  async componentDidMount() {
    const response = await api.get('/funcionarios');
    this.setState({ funcionarios: response.data, loading: false });
  }

  render() {
    const { funcionarios, loading } = this.state;

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            {funcionarios.length < 1 ? (
              <NoEntries>
                Você ainda não cadastrou nenhum funcionario...
                <Link to="/add">
                  <button className="btn-add">Vamos começar</button>
                </Link>
              </NoEntries>
            ) : (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>PIS/NIS</th>
                      <th>
                        <Link to="/add">
                          <button className="btn-add">
                            <FaPlusCircle className="button-icon" size={30} />
                          </button>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {funcionarios.map((funcionario) => (
                      <Funcionario key={funcionario.id}>
                        <td>
                          <span>
                            {funcionario.nome} {funcionario.sobrenome}
                          </span>
                        </td>
                        <td>
                          <span>{funcionario.email}</span>
                        </td>
                        <td>
                          <span>{funcionario.pis}</span>
                        </td>
                        <td>
                          <div className="controls">
                            <Link to={`/edit/${funcionario.id}`}>
                              <button className="btn-edit">
                                <FaEdit className="button-icon" size={30} />
                              </button>
                            </Link>
                            <button
                              className="btn-remove"
                              onClick={() =>
                                this.remove(this.container, funcionario.id)
                              }
                            >
                              <FaTrash className="button-icon" size={30} />
                            </button>
                          </div>
                        </td>
                      </Funcionario>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </>
        )}
      </>
    );
  }
}
