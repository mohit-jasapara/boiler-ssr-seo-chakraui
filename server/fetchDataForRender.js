import React from 'react';
import ssrPrepass from 'react-ssr-prepass';
import chalk from 'chalk';
import configureStore from '../src/redux/store';

const store = configureStore();

export const fetchDataForRender = (ServerApp, req) => {
  return ssrPrepass(<ServerApp store={store} location={req.url} />, element => {
    if (element && element.type && element.type.fetchData) {
      return element.type.fetchData(req, store);
    }
  }).then(() => {
    return store.getState();
  });
};

function logDuplicateKeyMessage(key, component) {
  /* eslint-disable no-console */
  console.log(
    chalk.red(
      `Warning: <${component} /> is overwriting an existing server data value for "${key}".`
    )
  );
  console.log(chalk.red('This can cause unexpected behavior.'));
  console.log('');
}
