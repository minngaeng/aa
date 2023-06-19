import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 1847px;
  font-weight: 500;
  font-size: 16px;
  margin: 0 auto;
  border: 1px solid black;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  margin: 80px 513px;
`;

export const InputWrapper = styled.div`
  padding-right: 24px;
  padding-bottom: 40px;
  /* margin-left: 102px; */
`;

export const Label = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
`;

export const WriterInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  ::placeholder {
    padding: 16px;
  }
`;

export const WriterPwdContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const ContentsInput = styled.input`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px;
  padding-left: 16px;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* padding-left: 16px; */
  /* padding: 14px; */
  text-align: center;
`;

export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  background: #bdbdbd;
  width: 78px;
  height: 78px;
  border: 1px solid #bdbdbd;
`;
