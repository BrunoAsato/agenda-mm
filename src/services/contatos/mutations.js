import { gql } from '@apollo/client';

const INSERT_CONTATO = gql`
  mutation insertContato($data: inputContatoType) {
    insertContato(input: $data) {
      id
    }
  }
`;

const mutations = { INSERT_CONTATO };

export default mutations;
