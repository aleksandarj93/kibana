/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export enum LICENSE_TYPE {
  BASIC,
  FULL, // >= platinum
}

export const VALID_FULL_LICENSE_MODES = ['platinum', 'enterprise', 'trial'];
