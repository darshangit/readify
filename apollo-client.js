import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://www.googleapis.com/books/v1/volumes",
  headers: {
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;
