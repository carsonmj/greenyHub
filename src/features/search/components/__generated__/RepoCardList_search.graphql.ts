/**
 * @generated SignedSource<<3ac0e6d18904cc53da35c9a651b534c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoCardList_search$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id?: string;
      readonly " $fragmentSpreads": FragmentRefs<"RepositoryCardStar_repository" | "RepositoryCard_repository">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "RepoCardList_search";
};
export type RepoCardList_search$key = {
  readonly " $data"?: RepoCardList_search$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepoCardList_search">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoCardList_search",
  "selections": [
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
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RepositoryCard_repository"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RepositoryCardStar_repository"
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
  ],
  "type": "SearchResultItemConnection",
  "abstractKey": null
};

(node as any).hash = "94317ca7f73775342b21ede567dadb14";

export default node;
