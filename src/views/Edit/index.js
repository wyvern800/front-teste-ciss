import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Infos, Erro } from './styles';
import api from '../../services/api';
import validator from 'validator';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: { erro: false, valor: '' },
      sobrenome: { erro: false, valor: '' },
      email: { erro: false, valido: false, valor: '' },
      pis: { erro: false, valor: '' },
      loading: true,
      notFound: false,
    };
  }

  componentDidMount() {
    const { funcionarioId } = this.props.match.params;

    api
      .get(`/funcionarios/${funcionarioId}`)
      .then((response) => {
        const { nome, sobrenome, email, pis } = response.data;

        if (response.status === 404) {
          this.setState({ notFound: true });
        } else {
          this.setState({
            nome: { erro: false, valor: nome },
            sobrenome: { erro: false, valor: sobrenome },
            email: { erro: false, valido: true, valor: email },
            pis: { erro: false, valor: pis },
          });
        }
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  edit(e) {
    self = this;
    e.preventDefault();

    const { nome, sobrenome, email, pis } = this.state;

    // Erros
    if (nome.valor === '') {
      this.setState({ nome: { erro: true, valor: '' } });
    }
    if (sobrenome.valor === '') {
      this.setState({ sobrenome: { erro: true, valor: '' } });
    }
    if (email.valor === '') {
      this.setState({ email: { erro: true, valor: '' } });
    } else if (!validator.isEmail(email.valor)) {
      this.setState({ email: { erro: true, valido: false, valor: '' } });
    }

    if (pis.valor === '') {
      this.setState({ pis: { erro: true, valor: '' } });
    }

    // Se todos os valores estiverem preenchidos, prosseguir com o post
    if (
      nome.valor !== '' &&
      sobrenome.valor !== '' &&
      email.valor !== '' &&
      pis.valor !== '' &&
      email.valido === true
    ) {
      const { funcionarioId } = this.props.match.params;
      api.put(`/funcionarios/${funcionarioId}`, {
          nome: nome.valor,
          sobrenome: sobrenome.valor,
          email: email.valor,
          pis: pis.valor,
        })
        .then((response) => {
          self.limpar();
        });
      }
  }

  limpar() {
    this.setState({
      nome: { erro: false, valor: '' },
      sobrenome: { erro: false, valor: '' },
      email: { erro: false, valor: '' },
      pis: { erro: false, valor: '' },
    });
  }

  onChange(e) {
    var novoObjeto = {};

    const valorEvento = e.target.value;

    switch (e.target.id) {
      case 'nome':
        novoObjeto = {
          nome: { erro: false, valor: valorEvento },
        };
        break;
      case 'sobrenome':
        novoObjeto = {
          sobrenome: { erro: false, valor: valorEvento },
        };
        break;
      case 'email':
        novoObjeto = {
          email: { erro: false, valor: valorEvento },
        };
        break;
      case 'pis':
        novoObjeto = {
          pis: { erro: false, valor: valorEvento },
        };
        break;
    }
    this.setState(novoObjeto);
  }

  render() {
    const { nome, sobrenome, email, pis, loading, notFound } = this.state;

    return (
      <>
        {loading ? (
          <>loading</>
        ) : (
          <>
            {notFound ? (
              <>Not found</>
            ) : (
              <>
                <Form action="post" onSubmit={() => editar()}>
                  <Infos>
                    <div>
                      <Erro>
                        {nome.erro ? (
                          <label>Nome não prenchido</label>
                        ) : (
                          'Nome:'
                        )}
                      </Erro>
                      <input
                        className="one"
                        id="nome"
                        placeholder="Nome"
                        type="text"
                        value={nome.valor}
                        onChange={(e) =>
                          this.setState({
                            nome: { erro: false, valor: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Erro>
                        {sobrenome.erro ? (
                          <label>Sobrenome não prenchido</label>
                        ) : (
                          'Sobrenome:'
                        )}
                      </Erro>
                      <input
                        className="two"
                        id="sobrenome"
                        type="text"
                        placeholder="Sobrenome"
                        value={sobrenome.valor}
                        onChange={(e) =>
                          this.setState({
                            sobrenome: { erro: false, valor: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </Infos>
                  <Erro>
                    {email.erro ? (
                      <label>Email não prenchido</label>
                    ) : !email.valido && !email.erro && email.valor != '' ? (
                      <label>Email inválido</label>
                    ) : (
                      'E-mail:'
                    )}
                  </Erro>
                  <input
                    id="email"
                    type="email"
                    value={email.valor}
                    placeholder="exemplo@public.com"
                    onChange={(e) =>
                      this.setState({
                        email: {
                          erro: false,
                          valido: validator.isEmail(email.valor) ? true : false,
                          valor: e.target.value,
                        },
                      })
                    }
                    required
                  />
                  <Erro>
                    {pis.erro ? (
                      <label>PIS/NIS não prenchido</label>
                    ) : (
                      'PIS/NIS:'
                    )}
                  </Erro>
                  <input
                    id="pis"
                    type="number"
                    placeholder="Numero do PIS/NIS"
                    value={pis.valor}
                    onChange={(e) =>
                      this.setState({
                        pis: { erro: false, valor: e.target.value },
                      })
                    }
                    required
                  />
                  <div className="botoes">
                    <Link to="/">
                      <button className="btn-back" type="submit">
                        Voltar
                      </button>
                    </Link>
                    <button
                      className="btn-edit"
                      type="submit"
                      onClick={this.edit.bind(this)}
                    >
                      Editar
                    </button>
                  </div>
                </Form>
              </>
            )}
          </>
        )}
      </>
    );
  }
}
