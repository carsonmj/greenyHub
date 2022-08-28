/**
 * @generated SignedSource<<8429fd90541f5fe8bfe067251273736e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryCard_repository$data = {
  readonly description: string | null;
  readonly name: string;
  readonly " $fragmentType": "RepositoryCard_repository";
};
export type RepositoryCard_repository$key = {
  readonly " $data"?: RepositoryCard_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryCard_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryCard_repository",
  "selections": [
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
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "7beedb6aa835f54db62b2103b1d281ed";

export default node;
