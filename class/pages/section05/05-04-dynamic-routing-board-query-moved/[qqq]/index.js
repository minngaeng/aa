import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

// fetchBoard(number:1) => fetchBoard(number:$number) 로 하드코딩이 아닌 변수로 만들어준다.
//바로 윗줄에  query fetchBoard($number: Int) => 형식을 지정해 준다.

export default function StaticRoutingMovePage() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    // $: { number: 1 },
    variables: { number: Number(router.query.qqq) },
  });

  console.log(data);
  console.log('해결방법:', data?.fetchBoard?.writer);

  return (
    <div>
      {/* <div>1번 게시글 이동 완료!!!</div>
       */}
      <div>{router.query.qqq} 번 게시글 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard?.writer} </div>
      <div>제목 : {data?.fetchBoard?.title} </div>
      <div>내용 : {data?.fetchBoard?.contents} </div>
    </div>
  );
}
