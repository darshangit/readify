import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/layout/Layout";
import BookProvider from "../store/BookProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BookProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </BookProvider>
  );
}

export default MyApp;
