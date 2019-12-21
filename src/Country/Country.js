import React from "react";
import query from "./query";
import { useQuery } from "react-apollo";

const Country = () => {
  const { loading, data, error } = useQuery(query);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  const country = data.country;

  return (
    <div>
      <div>Country</div>

      <div>
        <div>name</div>
        <div>{country.name}</div>
      </div>

      <div>
        <div>native</div>
        <div>{country.native}</div>
      </div>

      <div>
        <div>flag</div>
        <div>{country.emoji}</div>
      </div>
    </div>
  );
};

export default Country;
