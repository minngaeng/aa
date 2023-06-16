import { gql, useMutation, useQuery } from '@apollo/client';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

// 변수 지정을 위해 아래와 같이 바꾸어 준다.

// const DELETE_BOARD = gql`
//   mutation {
//     deleteBoard(number: 1) {
//       message
//     }
//   }
// `;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovePage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const mystyles = {
    margin: '10px',
  };

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.id);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // 특별한 이유가 없으면? Fragment로 감싸자! <div />는 1개 더 그려야돼서 조금 느려짐
        // 1. Fragment 란? <></>, <Fragment></Fragment>
        // 2. Fragment 에 key 입력하는 방법? <Fragment></Fragment>
        <div key={el.number}>x
          {/* index 를 key 로 주게 되면 index 를 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: '10px' }}>{el.number}</span>
          <span style={mystyles}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
          <div>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
