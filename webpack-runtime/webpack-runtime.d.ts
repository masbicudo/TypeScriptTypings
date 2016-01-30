/**
 * Type declarations for Webpack runtime.
 * From: https://github.com/andreypopp/typescript-loader
 *              /blob/master/lib/webpack-runtime.d.ts
 * Authors: BASE: andreypopp  https://github.com/andreypopp
 *          CHANGES: masbicudo - I had to change the syntax because compiler complains
 */

interface WebpackRequireEnsureCallback {
    (fn: (id: string) => any): any;
}

interface WebpackRequire {
  (id: string): any;
  ensure(ids: string[], WebpackRequireEnsureCallback): any;
}

declare var require: WebpackRequire;