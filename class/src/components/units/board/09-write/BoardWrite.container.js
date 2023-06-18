import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPdATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //    => variables 이게 $ 역할을 함
        // writer: '훈이',
        // title: '안녕하세요!',
        // contents: '반갑습니다',
        writer: writer, //$writer : (state) writer
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    // 내가 등록한 글 상세 번호 조회
    console.log(result.data.createBoard.number);
  };

  const onClikcUpdate = async () => {
    // 여기서 수정하기 하자!!
    const result = await updateBoard({
      $: {
        number: Number(router.query.number),
        write: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  //입력했을 때 감지
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      //writer 는 함수 끝나기 전까지 state가 바뀌는 것이 아님 임시저장공간에 담음 => 함수 끝나면 state 바꾸고 처음부터 다시 읽어 나감.
      setIsActive(true);
    }
  };

  // const onChangeTitle = (event) => {
  //   setTitle(event.target.value);
  //   if (writer && title && contents) {
  //     setIsActive(true);
  //   }
  // };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };

  // state 는 임시저장공간에 넣어두고 불필요한 랜더링을 방지한다. => 그 이후 처음부터 읽어 내려온다

  return (
    <div>
      <div>$$$$$$여기는 컨테이너 입니다.$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClikcUpdate={onClikcUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
      />
      <div>$$$$$$여기는 컨테이너 입니다.$$$$</div>
    </div>
  );
}
