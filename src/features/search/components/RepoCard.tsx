import type { RepoCardStarMutation } from "./__generated__/RepoCardStarMutation.graphql";
import type { RepoCardUnstarMutation } from "./__generated__/RepoCardUnstarMutation.graphql";

import { useFragment, useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import StarButton from "./StarButton";

const ListCard = (props: any) => {
  const query = graphql`
    fragment RepoCard_repository on Repository {
      name
      description
    }
  `;

  const queryForStar = graphql`
    fragment RepoCardStar_repository on Repository {
      id
      viewerHasStarred
      stargazerCount
    }
  `;
  const repoData = useFragment(query, props.repo);
  const starData = useFragment(queryForStar, props.repo);

  const [starCommitMutation, isStarMutationInFlight] = useMutation<RepoCardStarMutation>(
    graphql`
      mutation RepoCardStarMutation($input: AddStarInput!) {
        addStar(input: $input) {
          starrable {
            ...RepoCardStar_repository
          }
        }
      }
    `
  );

  const [unstarCommitMutation, isUnstarMutationInFlight] = useMutation<RepoCardUnstarMutation>(
    graphql`
      mutation RepoCardUnstarMutation($input: RemoveStarInput!) {
        removeStar(input: $input) {
          starrable {
            ...RepoCardStar_repository
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
    } else {
      starCommitMutation({
        variables: {
          input: { starrableId: id },
        },
      });
    }
  };

  return (
    <Container>
      <Title>{repoData.name}</Title>
      <Description>{repoData.description}</Description>
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
