/**
 * @generated SignedSource<<1a9f2da9e2685f96560236e48302311e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type RepositoryCardStarMutation$variables = {
  input: AddStarInput;
};
export type RepositoryCardStarMutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly " $fragmentSpreads": FragmentRefs<"RepositoryCardStar_repository">;
    } | null;
  } | null;
};
export type RepositoryCardStarMutation = {
  response: RepositoryCardStarMutation$data;
  variables: RepositoryCardStarMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryCardStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RepositoryCardStar_repository"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoryCardStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bfda57810700a55fa7ef040c03d8ce34",
    "id": null,
    "metadata": {},
    "name": "RepositoryCardStarMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryCardStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      ...RepositoryCardStar_repository\n      id\n    }\n  }\n}\n\nfragment RepositoryCardStar_repository on Repository {\n  id\n  viewerHasStarred\n  stargazerCount\n}\n"
  }
};
})();

(node as any).hash = "5ecace0cde7d1bba9079ad05d6142e18";

export default node;
