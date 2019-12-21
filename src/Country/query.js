import { gql } from "apollo-boost";

export default gql`
  query GetCountry($countryCode: String!) {
    country(code: $countryCode) {
      name
      native
      emoji
    }
  }
`;
