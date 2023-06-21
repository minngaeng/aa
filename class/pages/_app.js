import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default function App({ Component }) {
  const client = new ApolloClient({
    uri: 'http://backend-example.codebootcamp.co.kr/graphql', // 1. 플레이 그라운드에서 받아온데이터를 몰래 몰래 저장해 놓을게
    cache: new InMemoryCache(), // 2. cache 에  저장해 놓을게 3. 파일 or 메모리에 저장할 수 있음 => 메모리에 저장할게 
    //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아봄
  });

  return (
    <ApolloProvider client={client}>
      {/* const client (그래프큐엘셋팅) 를 전달하는데 도움주는 것 => ApolloProvider */}
      <Component />
    </ApolloProvider>
  );
}
