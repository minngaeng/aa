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
} from './BoardWrite.style';

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Title>게시물 </Title>
      <WriterPwdContainer>
        <InputWrapper>
          <Label>작성자</Label>

          <WriterInput
            onChange={props.onChangeId}
            type="text"
            placeholder="이름을 적어주세요."
          />
          <div>{props.errId}</div>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <WriterInput
            onChange={props.onChangePwd}
            type="text"
            placeholder="비밀번호를 입력해주세요."
          />
          <div>{props.errPwd}</div>
        </InputWrapper>
      </WriterPwdContainer>
      <InputWrapper>
        <Label>제목</Label>
        <TitleInput
          onChange={props.onChangeTitle}
          type="text"
          placeholder="제목을 작성해주세요."
        />
        <div>{props.errTitle}</div>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <ContentsInput
          onChange={props.onChangeContents}
          type="text"
          placeholder="내용을 작성해주세요."
        />
        <div>{props.errContents}</div>
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
        <button onClick={props.onClickSubmit}>등록하기</button>
      </div>
    </Wrapper>
  );
}
