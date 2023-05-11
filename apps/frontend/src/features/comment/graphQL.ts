import { gql } from '@apollo/client';

export const ADD_COMMENT_TO_POST = gql`
  mutation AddCommentToPost($text: String!, $postId: ID!) {
    addCommentToPost(createCommentInput: { text: $text, postId: $postId }) {
      id
      createdAt
      text
    }
  }
`;
