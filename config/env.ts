/**
 * @author: @AngularClass
 */
import {
  root,
} from './helpers.ts';

import * as OfflinePlugin from 'offline-plugin';

export const EXCLUDE_SOURCEMAPS = [
  // these packages have problems with their sourcemaps
  root('node_modules/@angular'),
  root('node_modules/rxjs'),
];

export const CUSTOM_COPY_FOLDERS = [

];

export const CUSTOM_PLUGINS_COMMON = [
  new OfflinePlugin(),
];

export const CUSTOM_PLUGINS_DEV = [

];

export const CUSTOM_PLUGINS_PROD = [

];

export const CUSTOM_RULES_COMMON = [

];

export const CUSTOM_RULES_DEV = [

];

export const CUSTOM_RULES_PROD = [

];

export const CUSTOM_DEV_RULES = [

];

export const CUSTOM_PROD_RULES = [

];

export const CUSTOM_PROD_PLUGINS = [

];

export const CUSTOM_DEV_SERVER_OPTIONS = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};

export const CUSTOM_DEV_PLUGINS = [

];

export const HTML5_BASE_URL = '/';
