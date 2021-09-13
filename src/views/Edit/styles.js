import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Erro = styled.div`
  label {
    color: red;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    background-color: rgb(238, 238, 238);
    border-radius: 5px;

    // Aplica borda caso haja erros
    ${(props) =>
      props.erro &&
      css`
        border: 2px solid #c53030;
      `}
    // Aplica estilo ao placeholder do input
    &::placeholder {
      color: #a8a8b3;
    }

    &:not(:first-child) {
      margin-bottom: 15px;
    }
  }

  div.botoes {
    display: flex;

    button {
      height: 50px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      min-width: 25%;
      outline: none;
    }
  }

  .btn-back {
    background: gray;
    border-radius: 0, 5px, 0, 5px;
    flex-grow: 1;
    width: 100px;
    margin-right: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    // Aplicar estilo ao dar hover
    &:hover {
      background: ${shade(0.2, 'gray')};
    }
  }

  .btn-edit {
    background: #47bcff;
    flex-grow: 1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    // Aplicar estilo ao dar hover
    &:hover {
      background: ${shade(0.2, '#00a1ff')};
    }
  }
`;

export const Infos = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2px;
  }

  .one {
    margin-right: 5px;
    width: 100%;
  }

  .two {
    margin-left: 5px;
  }
`;
