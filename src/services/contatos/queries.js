import { gql } from '@apollo/client';

const GET_CONTATOS = gql`
  query getContatos {
    getContatos {
      id
      nome
      email
      telefone
  }
`;

const GET_CONTATO = gql`
  query getContato {
    getContato {
      id
      nome
      email
      telefone
    }
  }
`;

const queries = {
  GET_CONTATOS,
  GET_CONTATO
};

export default queries;
