import styled from "styled-components";

interface InputProps {
  width?: number;
  height?: number;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return <Container placeholder={props.placeholder} />;
};

export default Input;

const Container = styled.input`
  width: ${({ width }) => (width ? width : "20rem")};
  height: ${(props) => props.height};
  padding: 0.5rem;
  padding-left: 1rem;
  border: 0;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray_2};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_2)};

  &:focus {
    outline: none;
    border-bottom: 0.2rem solid;
    border-color: ${({ theme }) => theme.colors.green_1};
  }
`;
