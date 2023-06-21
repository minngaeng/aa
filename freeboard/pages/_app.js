import '../styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
    //1. 임시 저장소를 만들게 된다.
    cache: new InMemoryCache(),
    //2. cache 에서 저장을 하게 되는데 > 3.InMemoryCache 에 담아서 저장해 볼게
  });

  return (
    <ApolloProvider client={client}>
      {/* graphql 셋팅을 client 에 담아서 component 에 전달  */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
