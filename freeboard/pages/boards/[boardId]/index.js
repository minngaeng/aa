import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <div>
      <div>작성자 {data?.fetchBoard?.writer}</div>
    </div>
  );
}
