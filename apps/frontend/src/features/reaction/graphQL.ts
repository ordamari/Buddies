import { gql } from '@apollo/client';

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
