import styled from "styled-components";

import StarButton from "./StarButton";

const ListCard = () => {
  return (
    <Container>
      <Title>greenlabs</Title>
      <Description>규모는 크지만 변화가 더뎠던 농업, 아무도 가지 않은 혁신의 길</Description>
      <StarButton starCount="254" isActive={true} onClick={() => {}} />
    </Container>
  );
};

export default ListCard;

const Container = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  margin-bottom: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${({ theme }) => theme.colors.white_1};
  color: ${({ theme }) => theme.colors.gray_1};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray_1};
    transition: background-color 0.4s linear;
  }
`;

const Title = styled.p`
  margin: 0.3rem 0;
  font-weight: 700;
  font-size: 1.6rem;
`;

const Description = styled.p`
  margin-bottom: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
