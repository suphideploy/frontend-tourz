import { ApolloClient, InMemoryCache,  gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://phukettourz.local/graphql',
    cache: new InMemoryCache(),
  });

  export default client;