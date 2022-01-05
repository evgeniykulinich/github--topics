import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const token = process.env.REACT_APP_TOKEN;
const history = createBrowserHistory();
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Topic: {
        fields: {
          repositories: {
            keyArgs: false,
            merge(existing, incoming) {
              if (!existing) return incoming;
              const { nodes, ...rest } = incoming;
              let result = rest;
              result.nodes = [...existing.nodes, ...nodes];
              return result;
            },
          },
        },
      },
    },
  }),
  headers: {
    Authorization: `bearer ${token}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
