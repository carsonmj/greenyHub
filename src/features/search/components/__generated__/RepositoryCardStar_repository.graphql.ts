/**
 * @generated SignedSource<<30dcf999ad96f85708e6780e988de2c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryCardStar_repository$data = {
  readonly id: string;
  readonly stargazerCount: number;
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "RepositoryCardStar_repository";
};
export type RepositoryCardStar_repository$key = {
  readonly " $data"?: RepositoryCardStar_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryCardStar_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryCardStar_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
};

(node as any).hash = "30a7ba4cf2d496d67d2f22759f96a42c";

export default node;
