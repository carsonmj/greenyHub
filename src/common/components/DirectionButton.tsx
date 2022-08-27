import styled from "styled-components";

interface ButtonProps {
  width?: number;
  height?: number;
  radius?: number;
  background?: string;
  direction: string;
  onClick: () => void;
}

const getDirectionText = (direction: string) => {
  switch (direction) {
    case "up":
      return "⌃";
    case "down":
      return "⌄";
    case "left":
      return "<";
    case "right":
      return ">";
    default:
      return "";
  }
};

const DirectionButton = (props: ButtonProps) => {
  return (
    <Container type="button" {...props} onClick={props.onClick}>
      {getDirectionText(props.direction)}
    </Container>
  );
};

export default DirectionButton;

const Container = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "3rem")};
  height: ${({ height }) => (height ? height : "3rem")};
  border: 0.1rem solid #dcdcdc;
  border-radius: ${({ radius }) => (radius ? radius : "0.4rem")};
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_3)};
  background: ${({ theme, background }) => (background ? background : theme.colors.white_1)};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
