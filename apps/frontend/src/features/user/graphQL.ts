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
        createdAt
      }
      friends {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
  }
`;

export const GET_USERS = gql`
  query Users($query: String, $limit: Float, $offset: Float) {
    users(queryAndFilter: { query: $query, limit: $limit, offset: $offset }) {
      id
      firstName
      lastName
      profileImageUrl
      friends {
        id
      }
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      profileImageUrl
      friends {
        id
        profileImageUrl
        firstName
        lastName
      }
      posts {
        id
        createdAt
        text
      }
    }
  }
`;