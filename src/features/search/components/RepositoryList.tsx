import type { PreloadedQuery } from "react-relay";
import type { RepositoryListQuery, RepositoryListQuery$data } from "./__generated__/RepositoryListQuery.graphql";
import type { RepositoryListPaginationQuery } from "./__generated__/RepositoryListPaginationQuery.graphql";
import { RepositoryList_query$key } from "./__generated__/RepositoryList_query.graphql";

import { Suspense } from "react";
import { usePreloadedQuery, usePaginationFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import RepositoryCard from "./RepositoryCard";
import Spinner from "../../../common/components/Spinner";
import Button from "../../../common/components/Button";

interface Props {
  queryReference: PreloadedQuery<RepositoryListQuery>;
}

const RepositoryList = (props: Props) => {
  const query = graphql`
    query RepositoryListQuery($keyword: String!, $cursor: String, $listCount: Int!) {
      ...RepositoryList_query
    }
  `;

  const preLoadData: RepositoryListQuery$data = usePreloadedQuery<RepositoryListQuery>(query, props.queryReference);

  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    RepositoryListPaginationQuery,
    RepositoryList_query$key
  >(
    graphql`
      fragment RepositoryList_query on Query @refetchable(queryName: "RepositoryListPaginationQuery") {
        search(query: $keyword, after: $cursor, type: REPOSITORY, first: $listCount)
          @connection(key: "RepositoryList_query_search") {
          pageInfo {
            startCursor
            hasNextPage
            endCursor
          }
          edges {
            node {
              ... on Repository {
                id
                ...RepositoryCard_repository
                ...RepositoryCardStar_repository
              }
            }
          }
        }
      }
    `,
    preLoadData
  );

  return (
    <Container>
      <ListWrapper>
        {data?.search?.edges &&
          data.search.edges.map((edge: any) => {
            if (edge != null) {
              return (
                <Suspense key={edge.node.id} fallback={<Spinner />}>
                  <RepositoryCard key={edge.node.id} repository={edge.node} />
                </Suspense>
              );
            }

            return null;
          })}
      </ListWrapper>
      {hasNext
        ? !isLoadingNext && (
            <Button
              text="더보기"
              onClick={() => {
                loadNext(10);
              }}
            />
          )
        : null}
      {isLoadingNext && <Loading>loding...</Loading>}
    </Container>
  );
};

export default RepositoryList;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 2rem 0;
`;

const Loading = styled.p`
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_3)};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;