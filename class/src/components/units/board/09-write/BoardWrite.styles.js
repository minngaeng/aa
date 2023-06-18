import styled from '@emotion/styled';

export const RedInput = styled.input`
  border-color: red;
`;

// export const BlueButton = styled.button`
//   background-color: ${(props) => props.mycolor};
// `;

// export const BlueButton = styled.button`
//   background-color: ${(props) => (props.mycolor === true ? 'yellow' : 'gray')};
// `;

export const BlueButton = styled.button`
  background-color: ${(props) => (props.isActive ? 'yellow' : 'gray')};
`;