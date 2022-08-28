/**
 * @generated SignedSource<<72c3bc43395a2e9ad9983625e31465fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RemoveStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type RepositoryCardUnstarMutation$variables = {
  input: RemoveStarInput;
};
export type RepositoryCardUnstarMutation$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly " $fragmentSpreads": FragmentRefs<"RepositoryCardStar_repository">;
    } | null;
  } | null;
};
export type RepositoryCardUnstarMutation = {
  response: RepositoryCardUnstarMutation$data;
  variables: RepositoryCardUnstarMutation$variables;
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
    "name": "RepositoryCardUnstarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
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
    "name": "RepositoryCardUnstarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
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
    "cacheID": "421f50d382e987cc01c35ec2f6e3b449",
    "id": null,
    "metadata": {},
    "name": "RepositoryCardUnstarMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryCardUnstarMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      ...RepositoryCardStar_repository\n      id\n    }\n  }\n}\n\nfragment RepositoryCardStar_repository on Repository {\n  id\n  viewerHasStarred\n  stargazerCount\n}\n"
  }
};
})();

(node as any).hash = "53398725f382d3e4da2a20bd3248a818";

export default node;
