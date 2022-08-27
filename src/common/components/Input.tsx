import { MutableRefObject } from "react";
import styled from "styled-components";

interface InputProps {
  width?: number;
  height?: number;
  placeholder?: string;
  refs: MutableRefObject<HTMLInputElement> | MutableRefObject<null>;
}

const Input = (props: InputProps) => {
  return <Container ref={props.refs} placeholder={props.placeholder} />;
};

export default Input;

const Container = styled.input`
  width: ${({ width }) => (width ? width : "25%")};
  min-width: 20rem;
  height: ${(props) => props.height};
  padding: 0.5rem;
  padding-left: 1rem;
  margin: 0 1rem;
  border: 0;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray_3};
  font-size: 1.6rem;
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_2)};

  &:focus {
    outline: none;
    border-bottom: 0.2rem solid;
    border-color: ${({ theme }) => theme.colors.green_1};
  }
`;
