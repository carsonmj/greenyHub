import { Suspense } from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import RepoCard from "./RepoCard";

const RepoCardList = (props: any) => {
  const query = graphql`
    fragment RepoCardList_search on SearchResultItemConnection {
      edges {
        node {
          ...RepoCard_repo
        }
      }
    }
  `;
  const data: any = useFragment(query, props.search);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Container>
        {data?.edges &&
          data.edges.map((edge: any, index: number) =>
            edge != null ? <RepoCard key={index} repo={edge.node} /> : null
          )}
      </Container>
    </Suspense>
  );
};

export default RepoCardList;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 2rem 0;
`;
