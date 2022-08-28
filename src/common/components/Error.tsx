import styled from "styled-components";

import Button from "./Button";

const Error = (props: any) => {
  return (
    <Container>
      <Description>An error has occurred</Description>
      <WarnningButton text="retry" onClick={props.retry} />
    </Container>
  );
};

export default Error;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Description = styled.h1`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  color: ${({ theme }) => theme.colors.gray_2};
`;

const WarnningButton = styled(Button)`
  border: ${({ theme }) => `0.2rem solid ${theme.colors.red_1}`};
  background: ${({ theme, background }) => (background ? background : theme.colors.red_1)};
`;
