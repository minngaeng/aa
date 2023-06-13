import { gql, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;
//데이터베이스에서 꺼내 가져올 때까지 기다렸다가 결과를 {data} 를 가져온 후 data.fetchBoard~ 쓸 수 있다. 그 다음에 그려줌  ====> 단점 : 너무 느려 보인다.
// 받아올 때까지 화면 흰색.
//그림 그려놓을 수 있는 거 먼저 그려 놓고, 즉 하드코딩한 데이터 먼저 그려 놓은 후, 데이터 받아오면 나머지 통신 데이터 그려주자 => 비동기 처리 방식

export default function StaticRoutingMovePage() {
  // useMutation, useState 는 대괄호로 묶었었음 이름도 바꿀 수 있었다.
  //{} 는 이름 못 바꿈 data 고정
  const { data } = useQuery(FETCH_BOARD); //data 백엔드에서 받아오기 전에는 {data} undefined  상태

  console.log(data); //여기까진 잘 데이터가 들어오는데
  // console.log(data.fetchBoard.writer); //여기서부터 데이터가 안 들어오고 있다
  console.log('해결방법:', data?.fetchBoard?.writer);

  return (
    <div>
      {/* data.fetchBoard.writer 이건 지금 자바스크립트임 ==> 변수에 넣어주려면 {} 이거 쓰면 됨! */}
      <div>1번 게시글 이동 완료!!!</div>
      {/* <div>작성자 : {data && data.fetchBoard.writer}</div>  => 조건부 렌더링이라고 부른다.  ==> data 있으면 그려줘~ ====> 이걸 매번 쓰기 어려우니 =======> 옵션널 체이닝 ?. */}
      <div>작성자 : {data?.fetchBoard?.writer} </div>
      <div>제목 : {data?.fetchBoard?.title} </div>
      <div>내용 : {data?.fetchBoard?.contents} </div>
      {/* <div>내용 : {data? fetchBoard.contents : "로딩중입니다!!"} </div> ==> 이렇게 사용할 수도 있습니당 */}
    </div>
  );
}
