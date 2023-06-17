import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  WriterInput,
} from '../../styles/board.style';

export default function Board() {
  return (
    <Wrapper>
      <Title>게시물 수정 </Title>
      <div>
        <InputWrapper>
          <Label>작성자</Label>
          <WriterInput type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>
        {/* <div>
          비밀번호
          <input />
        </div> */}
      </div>
    </Wrapper>
  );
}
