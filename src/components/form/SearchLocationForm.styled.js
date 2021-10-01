import styled from 'styled-components';

export const Form = styled.form`
  width: 60%;
  max-width: 400px;
  margin: 0 auto;
  border-bottom: 1px solid #e3e3e3;

  & div {
    display: flex;
    align-items: center;
  }
`;
export const Button = styled.button`
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: #e3e3e3;

  &:hover {
    cursor: pointer;
    color: #6b6b6b;
  }
`;
export const Input = styled.input`
  font-size: 16px;
  height: 30px;
  background: transparent;
  outline: none;
  border: none;
  width: calc(100% - 30px);
  color: #6b6b6b;
  padding: 0 5px;

  &::placeholder {
    color: #e3e3e3;
  }
`;
