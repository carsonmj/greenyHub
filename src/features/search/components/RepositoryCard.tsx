import type { RepositoryCardStarMutation } from "./__generated__/RepositoryCardStarMutation.graphql";
import type { RepositoryCardUnstarMutation } from "./__generated__/RepositoryCardUnstarMutation.graphql";

import { useFragment, useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import StarButton from "./StarButton";

const RepositoryCard = (props: any) => {
  const query = graphql`
    fragment RepositoryCard_repository on Repository {
      name
      description
    }
  `;

  const queryForStar = graphql`
    fragment RepositoryCardStar_repository on Repository {
      id
      viewerHasStarred
      stargazerCount
    }
  `;
  const repositoryData = useFragment(query, props.repository);
  const starData = useFragment(queryForStar, props.repository);

  const [starCommitMutation, isStarMutationInFlight] = useMutation<RepositoryCardStarMutation>(
    graphql`
      mutation RepositoryCardStarMutation($input: AddStarInput!) {
        addStar(input: $input) {
          starrable {
            ...RepositoryCardStar_repository
          }
        }
      }
    `
  );

  const [unstarCommitMutation, isUnstarMutationInFlight] = useMutation<RepositoryCardUnstarMutation>(
    graphql`
      mutation RepositoryCardUnstarMutation($input: RemoveStarInput!) {
        removeStar(input: $input) {
          starrable {
            ...RepositoryCardStar_repository
          }
        }
      }
    `
  );

  const handleStarButtonClick = (viewerHasStarred: boolean, id: string) => {
    if (viewerHasStarred) {
      unstarCommitMutation({
        variables: {
          input: { starrableId: id },
        },
      });
      return;
    }

    starCommitMutation({
      variables: {
        input: { starrableId: id },
      },
    });
  };

  return (
    <Container>
      <Title>{repositoryData.name}</Title>
      <Description>{repositoryData.description}</Description>
      <StarButton
        starCount={starData.stargazerCount}
        isActive={starData.viewerHasStarred}
        onClick={() => {
          handleStarButtonClick(starData.viewerHasStarred, starData.id);
        }}
        disabled={isStarMutationInFlight || isUnstarMutationInFlight}
      />
    </Container>
  );
};

export default RepositoryCard;

const Container = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  margin-bottom: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${({ theme }) => theme.colors.white_1};
  color: ${({ theme }) => theme.colors.gray_1};
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: pre-line;
  overflow: hidden;

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
