import type { pageGitHubRepoQuery as pageGitHubRepoQueryType } from "../src/features/search/page/__generated__/pageGitHubRepoQuery.graphql";

import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import { ThemeProvider } from "styled-components";

import App from "./App";
import RelayEnvironment from "./RelayEnvironment";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";
import pageGitHubRepoQuery from "../src/features/search/page/__generated__/pageGitHubRepoQuery.graphql";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const initialQueryRef = loadQuery<pageGitHubRepoQueryType>(RelayEnvironment, pageGitHubRepoQuery, {
  keyword: "그린랩스",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
