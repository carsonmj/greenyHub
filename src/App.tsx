import type { PreloadedQuery } from "react-relay";
import type { RepositoryListQuery as RepositoryListQueryType } from "./features/search/components/__generated__/RepositoryListQuery.graphql";

import { useState, Suspense, useRef } from "react";
import { useQueryLoader } from "react-relay/hooks";

import SearchRepositoryLayout from "./features/search/layout/SearchRepositoryLayout";
import RepositoryList from "./features/search/components/RepositoryList";
import Button from "./common/components/Button";
import Error from "./common/components/Error";
import ErrorBoundaryWithRetry from "./common/components/ErrorBoundaryWithRetry";
import Header from "./common/components/Header";
import Input from "./common/components/Input";
import Spinner from "./common/components/Spinner";
import { generateKeywordQueryParameter } from "./common/utils/helper";
import RespositoryListQuery from "./features/search/components/__generated__/RepositoryListQuery.graphql";

interface Props {
  initialQueryRef: PreloadedQuery<RepositoryListQueryType>;
}

interface QueryVariables {
  keyword: string;
  listCount: number;
  cursor?: string;
}

const App = (props: Props) => {
  const listCount = 10;
  const [keyword, setKeyword] = useState("그린랩스");
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [queryReference, loadQuery] = useQueryLoader<RepositoryListQueryType>(
    RespositoryListQuery,
    props.initialQueryRef
  );

  const loadSearchQuery = (variables: QueryVariables) => {
    loadQuery(variables);
  };

  const handleKeywordChange = () => {
    const value = searchInputRef?.current?.value;

    if (value) {
      loadSearchQuery({ keyword: generateKeywordQueryParameter(value), listCount });
      setKeyword(value);
    }
  };

  return (
    <SearchRepositoryLayout
      header={<Header />}
      searchInput={
        <>
          <Input refs={searchInputRef} placeholder="Please enter the keyword" />
          <Button onClick={handleKeywordChange} text="검색" />
        </>
      }
      body={
        <ErrorBoundaryWithRetry
          onRetry={() => loadSearchQuery({ keyword: generateKeywordQueryParameter(keyword), listCount })}
          fallback={({ error, retry }) => <Error retry={retry} />}
        >
          <Suspense fallback={<Spinner />}>
            {queryReference != null ? <RepositoryList queryReference={queryReference} /> : null}
          </Suspense>
        </ErrorBoundaryWithRetry>
      }
    />
  );
};

export default App;
