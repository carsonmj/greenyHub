import { render, screen, act } from "@testing-library/react";
import { loadQuery, RelayEnvironmentProvider } from "react-relay";
import { MockPayloadGenerator, createMockEnvironment } from "relay-test-utils";
import { graphql } from 'babel-plugin-relay/macro';
import { ThemeProvider } from 'styled-components';

import App from "../App";
import theme from "../styles/theme";

test("render App component", () => {
  const environment = createMockEnvironment();
  environment.mock.queueOperationResolver((operation) => {
    return MockPayloadGenerator.generate(operation, {});
  });

  const query = graphql`
    query AppQuery($keyword: String!, $cursor: String, $listCount: Int!) {
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
              name
              description
              viewerHasStarred
              stargazerCount
            }
          }
        }
      }
    }
  `;

  const variables = {
    keyword: "react in:name react in:description",
    listCount: 10,
  };

  environment.mock.queuePendingOperation(query, variables);

  let queryReference;

  act(() => {
    queryReference = loadQuery(environment, query, variables);
  });

  render(
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <App initialQueryRef={queryReference} />
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );

  const logo = screen.getByText(/greenyHub/i);
  expect(logo).toBeInTheDocument();
});
