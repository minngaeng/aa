import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';

//createBoard(writer: "철수", title: "안녕핫요", contents: "반갑습니다") {
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
// 훈이 , 안녕하세요, 반갑습니다.

export default function GraphqlMutationPage() {
 

  const router = useRouter();
 
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    //외부에 요청하는 것들은 확신할 수 없다. 시도를 해 볼수 있음 ..
    //시도하다가 난 에러도 잡을 수 있음
    try {
      //try 에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch 에 있는 내용이 실행됨.
      const result = await 나의함수({
        variables: {
          //    => variables 이게 $ 역할을 함
          writer: '훈이',
          title: '안녕하세요!',
          contents: '반갑습니다',
        },
      }); // 실패하면 이 이하 모두 실행 안됨
      console.log(result);
      console.log(result.data.createBoard.number);
      // router.push('/section05/05-05-dynamic-routing-board-mutation-moved/2000')
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
//이 error 는 백에서 주는 error 
alert(error.message)

    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
