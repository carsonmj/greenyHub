import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery, PreloadedQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { OperationType } from "relay-runtime";

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    search(query: "greenlabs in:name greenlabs in:description", type: REPOSITORY, first: 10) {
      repositoryCount
      nodes {
        ... on Repository {
          nameWithOwner
          description
          stargazerCount
          stargazers(first: 10) {
            totalCount
          }
          updatedAt
          createdAt
          diskUsage
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {});

const App = (props: { preloadedQuery: PreloadedQuery<OperationType, Record<string, unknown>> }) => {
  const data: any = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div>
      <header>
        <p>{data.search.nodes[0].description}</p>
      </header>
    </div>
  );
};

const AppRoot = (props: any) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default AppRoot;
