import styled from "styled-components";

interface StarButtonProps {
  starCount: string;
  isActive: boolean;
  onClick: () => void;
  disabled: boolean;
}

interface StyledButtonProps {
  isActive: boolean;
}

const StarButton = ({ starCount, isActive, onClick, disabled }: StarButtonProps) => {
  return (
    <Container isActive={isActive} onClick={onClick} disabled={disabled}>
      ⭐️ {starCount}
    </Container>
  );
};

export default StarButton;

const Container = styled.button<StyledButtonProps>`
  width: 8rem;
  height: 2.5rem;
  line-height: 0.5rem;
  border: 0;
  border-radius: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_2};
  background: ${({ theme, isActive }) => (isActive ? theme.colors.yellow_1 : theme.colors.lightgray_2)};
  cursor: pointer;
`;
