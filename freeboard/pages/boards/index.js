import { Input } from 'antd';
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
} from '../../styles/board.style';

export default function Board() {
  return (
    <Wrapper>
      <Title>게시물 수정 </Title>
      <WriterPwdContainer>
        <InputWrapper>
          <Label>작성자</Label>
          <WriterInput type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <WriterInput type="text" placeholder="비밀번호를 입력해주세요." />
        </InputWrapper>
      </WriterPwdContainer>
      <InputWrapper>
        <Label>제목</Label>
        <TitleInput type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <ContentsInput type="text" placeholder="내용을 작성해주세요." />
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
        <button>취소하기</button>
        <button>수정하기</button>
      </div>
    </Wrapper>
  );
}
