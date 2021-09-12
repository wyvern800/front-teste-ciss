import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

export const Table = styled.table`
  width: 100%;
  text-align: center;

  .btn-add {
    outline: none;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
    width: 25px;
    padding: 1px;
    margin: 1px;
    // Aplicar estilo ao dar hover
    color: #04d361;

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, '#04d361')};
    }
  }

  thead {
    width: 100%;
    color: gray;

    tr {
      th {
        height: 2px;
        line-height: 30px;
      }
    }
  }

  tbody {
    width: 100%;
  }
`;

export const Funcionario = styled.tr`
  color: white;
  border: 1px solid black;
  width: 100%;
  height: 50px;

  // Aplicado apenas aos componentes depois do primeiro
  td {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  span {
    color: black;
  }

  div.controls {
    display: flex;
  }

  button.btn-remove,
  .btn-edit,
  .btn-add {
    outline: none;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
    width: 25px;
    padding: 1px;
    margin: 1px;
  }

  // Botão de editar
  .btn-edit {
    color: hsl(194, 71%, 66%);

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'hsl(192, 67%, 44%)')};
    }
  }

  // Botão de remover
  .btn-remove {
    color: hsl(0, 71%, 66%);

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'hsl(0, 67%, 44%)')};
    }
  }
`;
