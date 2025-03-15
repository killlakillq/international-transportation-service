import gql from 'graphql-tag';

export const GET_USER_ID_QUERY = gql`
  query getUserId($id: String!) {
    getUserId(id: $id) {
      id
    }
  }
`;
