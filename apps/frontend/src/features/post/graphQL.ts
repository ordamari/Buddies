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

export const EDIT_REACTION_TYPE = gql`
  mutation EditReactionType($type: ReactionType!, $id: ID!) {
    editReactionType(editReactionTypeInput: { type: $type, id: $id }) {
      id
      type
    }
  }
`;
export const REMOVE_REACTION = gql`
  mutation RemoveReaction($id: ID!) {
    removeReaction(id: $id) {
      type
    }
  }
`;
