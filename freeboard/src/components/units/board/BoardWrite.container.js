import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries';

export default function BoardWrite() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [errId, setErrId] = useState('');
  const [errPwd, setErrPwd] = useState('');
  const [errTitle, setErrTitle] = useState('');
  const [errContents, setErrContents] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeId = (event) => {
    setId(event.target.value);
    if (errId) {
      setErrId('');
    }
  };

  const onChangePwd = (event) => {
    setPwd(event.target.value);
    if (errPwd) {
      setErrPwd('');
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (errTitle) {
      setErrTitle('');
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (errContents) {
      setErrContents('');
    }
  };

  const onClickSubmit = async (event) => {
    if (!id) {
      setErrId('이름을 입력하세요.');
    }
    if (!pwd) {
      setErrPwd('비밀번호를 입력하세요.');
    }
    if (!title) {
      setErrTitle('제목을 입력하세요.');
    }
    if (!contents) {
      setErrContents('내용을 입력하세요.');
    }

    if (id && pwd && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: id,
              password: pwd,
              title,
              contents,
            },
          },
        });
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <BoardWriteUI
      onChangeId={onChangeId}
      errId={errId}
      onChangePwd={onChangePwd}
      errPwd={errPwd}
      onChangeTitle={onChangeTitle}
      errTitle={errTitle}
      onChangeContents={onChangeContents}
      errContents={errContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
