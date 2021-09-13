import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

export const NoEntries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-add {
    outline: none;
    color: white;
    border: 0;
    background: #04d361;
    height: 50px;
    margin-top: 25px;
    border-radius: 5px;
    width: 200px;
    font-weight: bold;
    // Aplicar estilo ao dar hover
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #e1e1df;

  .btn-add {
    outline: none;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
    width: 15px;
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
    border: 1px solid #e3e3e3;

    tr {
      th {
        height: 2px;
        line-height: 30px;
      }
    }
  }

  tbody {
    width: 100%;

    // Aplicar cores a elementos pares
    tr {
      &:nth-child(even) {
        background-color: #e3e3e3;
      }
    }
  }
`;

export const Funcionario = styled.tr`
  color: white;
  width: 100%;
  height: 50px;

  &:not(:first) {
    border-bottom: 1px dashed #dcdcda;
  }

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
    margin: 5px;
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
