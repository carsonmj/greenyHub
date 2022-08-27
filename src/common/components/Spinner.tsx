import styled, { keyframes } from "styled-components";

const SpinnerWrapper = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 50vh;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: ${({ theme }) => `4px solid ${theme.colors.lightgray_1}`};
  border-right: ${({ theme }) => `4px solid ${theme.colors.lightgray_1}`};
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.lightgray_1}`};
  border-left: ${({ theme }) => `6px solid ${theme.colors.green_1}`};
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export default SpinnerWrapper;
