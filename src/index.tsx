import type { RepositoryListQuery as RepositoryListQueryType } from "../src/features/search/components/__generated__/RepositoryListQuery.graphql";

import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { generateKeywordQueryParameter } from "./common/utils/helper";
import RelayEnvironment from "./RelayEnvironment";
import RespositoryListQuery from "./features/search/components/__generated__/RepositoryListQuery.graphql";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const initialQueryRef = loadQuery<RepositoryListQueryType>(RelayEnvironment, RespositoryListQuery, {
  keyword: generateKeywordQueryParameter("그린랩스"),
  listCount: 10,
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <App initialQueryRef={initialQueryRef} />
      </RelayEnvironmentProvider>
    </ThemeProvider>
  </React.StrictMode>
);
