import type { PreloadedQuery } from "react-relay";
import type { pageGitHubRepoQuery } from "./__generated__/pageGitHubRepoQuery.graphql";
import type { pageGitHubRepoQuery$data } from "./__generated__/pageGitHubRepoQuery.graphql";

import { usePreloadedQuery } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import DirectionButton from "../../../common/components/DirectionButton";
import RepoCardList from "../components/RepoCardList";

interface Props {
  handleNavigationClick: (cursor: string, direction: string) => void;
  queryReference: PreloadedQuery<pageGitHubRepoQuery>;
}

const SerachPage = (props: Props) => {
  const query = graphql`
    query pageGitHubRepoQuery($keyword: String!, $startCursor: String, $endCursor: String) {
      search(query: $keyword, before: $startCursor, after: $endCursor, type: REPOSITORY, first: 10) {
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
        ...RepoCardList_search
      }
    }
  `;
  const data: pageGitHubRepoQuery$data = usePreloadedQuery<pageGitHubRepoQuery>(query, props.queryReference);

  const handleNavigationClick = (direction: string) => {
    if (direction === "prev") {
      const cursor = data.search.pageInfo.endCursor;
      cursor && props.handleNavigationClick(cursor, "prev");
    } else if (direction === "next") {
      const cursor = data.search.pageInfo.endCursor;
      cursor && props.handleNavigationClick(cursor, "next");
    }
  };

  return (
    <Container>
      <RepoCardList search={data?.search} />
      {data?.search?.pageInfo?.hasNextPage && (
        <ButtonsWrapper>
          <DirectionButton
            direction="left"
            onClick={() => {
              handleNavigationClick("prev");
            }}
          />
          <DirectionButton
            direction="right"
            onClick={() => {
              handleNavigationClick("next");
            }}
          />
        </ButtonsWrapper>
      )}
    </Container>
  );
};

export default SerachPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
