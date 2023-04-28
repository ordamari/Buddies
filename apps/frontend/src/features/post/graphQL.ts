import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts {
    posts {
      id
      text
      createdAt
      comments {
        id
        text
      }
      creator {
        id
        profileImageUrl
        firstName
        lastName
      }
    }
  }
`;

export const GET_POST = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      text
      comments {
        id
        text
      }
      creator {
        id
        profileImageUrl
        firstName
        lastName
      }
    }
  }
`;
