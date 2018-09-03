import gql from 'graphql-tag';

// Responsible to return the current user logged in the application
export default gql`
  {
    tasks {
      id
      creationDate
      title
      image
      description
      deadline
      userId
    }
  }
`;
