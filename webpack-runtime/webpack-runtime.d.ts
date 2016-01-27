/**
 * Type declarations for Webpack runtime.
 * From: https://github.com/andreypopp/typescript-loader
 *              /blob/master/lib/webpack-runtime.d.ts
 * Author: andreypopp  https://github.com/andreypopp
 */

interface WebpackRequireEnsureCallback {
  ((id: string) => any) => any
}

interface WebpackRequire {
  (id: string) => any;
  ensure(ids: string[], WebpackRequireEnsureCallback) => any;
}

declare var require: WebpackRequire;