import React from "react";
import "./App.css";
import Country from "./Country/Country";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

function App() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/"
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Country code="RO" />
      </ApolloProvider>
    </div>
  );
}

export default App;
