import type { PreloadedQuery } from "react-relay";
import type { pageGitHubRepoQuery as pageGitHubRepoQueryType } from "../src/features/search/page/__generated__/pageGitHubRepoQuery.graphql";

import { useState, Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay/hooks";

import SerachPage from "./features/search/page";
import Error from "./common/components/Error";
import ErrorBoundaryWithRetry from "./common/components/ErrorBoundaryWithRetry";
import pageGitHubRepoQuery from "../src/features/search/page/__generated__/pageGitHubRepoQuery.graphql";

interface Props {
  initialQueryRef: PreloadedQuery<pageGitHubRepoQueryType>;
}

const generateKeywordQueryParameter = (keyword: string) => {
  return `${keyword} in:name ${keyword} in:description`;
};

const App = (props: Props) => {
  const [keyword, setKeyword] = useState("그린랩스");
  const [queryReference, loadQuery] = useQueryLoader<pageGitHubRepoQueryType>(
    pageGitHubRepoQuery,
    props.initialQueryRef
  );

  const handleKeywordChange = (newKeyword: string) => {
    loadQuery({
      keyword: generateKeywordQueryParameter(newKeyword),
    });
    setKeyword(newKeyword);
  };

  const handleNavigationClick = (cursor: string, direction: string) => {
    if (direction === "prev") {
      loadQuery({
        keyword,
        startCursor: cursor,
      });
    } else if (direction === "next") {
      loadQuery({
        keyword,
        endCursor: cursor,
      });
    }
  };

  useEffect(() => {
    loadQuery({
      keyword: generateKeywordQueryParameter(keyword),
    });
  }, []);

  return (
    <ErrorBoundaryWithRetry
      onRetry={() =>
        loadQuery({
          keyword: generateKeywordQueryParameter(keyword),
        })
      }
      fallback={({ error, retry }: { error: any; retry: () => void }) => <Error retry={retry} />}
    >
      <Suspense fallback="Loading...">
        {queryReference != null ? (
          <SerachPage
            queryReference={queryReference}
            keyword={keyword}
            handleKeywordChange={handleKeywordChange}
            handleNavigationClick={handleNavigationClick}
          />
        ) : null}
      </Suspense>
    </ErrorBoundaryWithRetry>
  );
};

export default App;
