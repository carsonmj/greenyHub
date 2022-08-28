/**
 * @generated SignedSource<<5648c19e7f8845d326720f353620ec44>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryListQuery$variables = {
  cursor?: string | null;
  keyword: string;
  listCount: number;
};
export type RepositoryListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryList_query">;
};
export type RepositoryListQuery = {
  response: RepositoryListQuery$data;
  variables: RepositoryListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "keyword"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "listCount"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "listCount"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "keyword"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "REPOSITORY"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RepositoryList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RepositoryListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "description",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerHasStarred",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "stargazerCount",
                        "storageKey": null
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [
          "query",
          "type"
        ],
        "handle": "connection",
        "key": "RepositoryList_query_search",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "f27939ba7b51d0fd8e62c6b1dc17c8bc",
    "id": null,
    "metadata": {},
    "name": "RepositoryListQuery",
    "operationKind": "query",
    "text": "query RepositoryListQuery(\n  $keyword: String!\n  $cursor: String\n  $listCount: Int!\n) {\n  ...RepositoryList_query\n}\n\nfragment RepositoryCardStar_repository on Repository {\n  id\n  viewerHasStarred\n  stargazerCount\n}\n\nfragment RepositoryCard_repository on Repository {\n  name\n  description\n}\n\nfragment RepositoryList_query on Query {\n  search(query: $keyword, after: $cursor, type: REPOSITORY, first: $listCount) {\n    pageInfo {\n      startCursor\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        __typename\n        ... on Repository {\n          id\n          ...RepositoryCard_repository\n          ...RepositoryCardStar_repository\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d487d556eed3cf0e48417bc9576319aa";

export default node;
