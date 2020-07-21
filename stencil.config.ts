import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'antix-easi-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { type: 'docs-readme' },
    { type: 'docs-json', file: 'docs.json' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: '../node_modules/@ntix/bind/dist', dest: 'libs/bind' }]
    }
  ],
  globalStyle: './src/global/vars.css'
};
