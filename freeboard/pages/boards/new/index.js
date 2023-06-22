import { gql, useMutation } from '@apollo/client';
import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  WriterInput,
  WriterPwdContainer,
  TitleInput,
  ContentsInput,
  Zipcode,
  SearchBtn,
  ZipcodeWrapper,
  Address,
  Youtube,
  UploadButton,
  UploadWrapper,
} from '../../../styles/board.style';
import { useState } from 'react';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function Board() {
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
      console.log(result);
    }
  };

  return (
    <Wrapper>
      <Title>게시물 </Title>
      <WriterPwdContainer>
        <InputWrapper>
          <Label>작성자</Label>

          <WriterInput
            onChange={onChangeId}
            type="text"
            placeholder="이름을 적어주세요."
          />
          <div>{errId}</div>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <WriterInput
            onChange={onChangePwd}
            type="text"
            placeholder="비밀번호를 입력해주세요."
          />
          <div>{errPwd}</div>
        </InputWrapper>
      </WriterPwdContainer>
      <InputWrapper>
        <Label>제목</Label>
        <TitleInput
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 작성해주세요."
        />
        <div>{errTitle}</div>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <ContentsInput
          onChange={onChangeContents}
          type="text"
          placeholder="내용을 작성해주세요."
        />
        <div>{errContents}</div>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchBtn>우편번호 검색</SearchBtn>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube />
      </InputWrapper>
      <div>
        <Label>사진 첨부</Label>
        <UploadWrapper>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </UploadWrapper>
      </div>
      <div>
        <Label>메인 설정</Label>
        <input type="radio" />
        <label>유튜브</label>
        <input type="radio" />
        <label>사진</label>
      </div>
      <div>
        <button onClick={onClickSubmit}>등록하기</button>
      </div>
    </Wrapper>
  );
}
