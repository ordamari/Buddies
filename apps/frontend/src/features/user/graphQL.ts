import { gql } from '@apollo/client';

export const UPDATE_PROFILE_IMAGE = gql`
  mutation UpdateProfileImage($file: Upload!) {
    updateProfileImage(file: $file) {
      id
      profileImageUrl
    }
  }
`;

export const UPDATE_COVER_IMAGE = gql`
  mutation UpdateCoverImage($file: Upload!) {
    updateCoverImage(file: $file) {
      id
      coverImageUrl
    }
  }
`;

export const GET_LOGGED_IN_USER = gql`
  query LoggedInUser {
    loggedInUser {
      id
      email
      lastName
      profileImageUrl
      firstName
      coverImageUrl
      posts {
        id
        text
      }
    }
  }
`;
