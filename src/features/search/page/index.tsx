import type { PreloadedQuery } from "react-relay";
import type { pageGitHubRepoQuery } from "./__generated__/pageGitHubRepoQuery.graphql";

import { useRef } from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import Button from "../../../common/components/Button";
import DirectionButton from "../../../common/components/DirectionButton";
import Header from "../../../common/components/Header";
import Input from "../../../common/components/Input";
import RepoCardList from "../components/RepoCardList";

interface Props {
  keyword: string;
  handleKeywordChange: (newKeyword: string) => void;
  handleNavigationClick: (cursor: string, direction: string) => void;
  queryReference: PreloadedQuery<pageGitHubRepoQuery>;
}

const SerachPage = (props: Props) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
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
  const data: any = usePreloadedQuery<pageGitHubRepoQuery>(query, props.queryReference);

  const handleSearchClick = () => {
    const value = searchInputRef?.current?.value;

    if (value) {
      props.handleKeywordChange(value);
    }
  };

  const handleNavigationClick = (direction: string) => {
    if (direction === "prev") {
      const cursor = data.search.pageInfo.endCursor;
      props.handleNavigationClick(cursor, "prev");
    } else if (direction === "next") {
      const cursor = data.search.pageInfo.endCursor;
      props.handleNavigationClick(cursor, "next");
    }
  };

  return (
    <Container>
      <Header />
      <BodyWrapper>
        <SearchWrapper>
          <Input refs={searchInputRef} placeholder="Please enter the keyword" />
          <Button onClick={handleSearchClick} text="검색" />
        </SearchWrapper>
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
      </BodyWrapper>
    </Container>
  );
};

export default SerachPage;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.8rem;
`;

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;

const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
