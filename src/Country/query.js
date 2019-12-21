import { gql } from "apollo-boost";

export default gql`
  query GetCountry {
    country(code: "ME") {
      name
      native
      emoji
    }
  }
`;
