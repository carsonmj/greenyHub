import styled from "styled-components";

interface ButtonProps {
  width?: number;
  height?: number;
  radius?: number;
  background?: string;
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Container type="button" {...props} onClick={props.onClick}>
      {props.text}
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "8rem")};
  height: ${({ height }) => (height ? height : "3rem")};
  background: ${({ theme, background }) => (background ? background : theme.colors.green_1)};
  color: ${({ theme, color }) => (color ? color : theme.colors.white_1)};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border: 0;
  border-radius: ${({ radius }) => (radius ? radius : "4rem")};
`;
