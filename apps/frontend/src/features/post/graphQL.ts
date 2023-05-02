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
        createdAt
        creator {
          id
          profileImageUrl
          firstName
          lastName
        }
      }
      creator {
        id
        profileImageUrl
        firstName
        lastName
      }
      reactions {
        id
        type
        creator {
          id
          profileImageUrl
          firstName
          lastName
        }
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
      reactions {
        id
        type
        creator {
          id
          profileImageUrl
          firstName
          lastName
        }
      }
    }
  }
`;

export const ADD_COMMENT_TO_POST = gql`
  mutation AddCommentToPost($text: String!, $postId: ID!) {
    addCommentToPost(createCommentInput: { text: $text, postId: $postId }) {
      id
      createdAt
      text
    }
  }
`;

export const ADD_REACTION_TO_POST = gql`
  mutation AddReactionToPost($type: ReactionType!, $postId: ID!) {
    addReactionToPost(createReactionInput: { type: $type, postId: $postId }) {
      id
      type
    }
  }
`;
