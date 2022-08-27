import styled from "styled-components";

import Button from "./Button";

const Error = (props: any) => {
  return (
    <Container>
      <Description>An error has occurred</Description>
      <Button text="retry" background="#F99898" onClick={props.retry} />
    </Container>
  );
};

export default Error;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Description = styled.h1`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xl3};
`;
