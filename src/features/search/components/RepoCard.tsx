import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import StarButton from "./StarButton";

const ListCard = (props: any) => {
  const query = graphql`
    fragment RepoCard_repo on SearchResultItem {
      ... on Repository {
        name
        nameWithOwner
        description
        stargazerCount
      }
    }
  `;
  const singleRepo = useFragment(query, props.repo);

  return (
    <Container>
      <Title>{singleRepo.nameWithOwner}</Title>
      <Description>{singleRepo.description}</Description>
      <StarButton starCount={singleRepo.stargazerCount} isActive={true} onClick={() => {}} />
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
  margin-bottom: 0.6rem;
  font-weight: 700;
  font-size: 1.6rem;
`;

const Description = styled.p`
  margin-bottom: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
