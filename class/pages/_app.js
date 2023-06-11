import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function MyApp({ Component }) {
  const client = new ApolloClient({
    uri: 'http://backend-example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}
