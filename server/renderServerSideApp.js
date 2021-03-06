import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import App from '../src/components/App';
import { fetchDataForRender } from './fetchDataForRender';
import { indexHtml } from './indexHtml';
import stats from '../build/react-loadable.json';
import configureStore from '../src/redux/store';
import { Provider } from 'react-redux';
import _ from 'lodash';
import { ChakraProvider } from '@chakra-ui/core';
import STATUS from '../src/Constants';
import getHelmetTags from './getHelmetTags';

const store = configureStore();

const ServerApp = ({ context, data, helmetTags, location }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <Helmet>{helmetTags}</Helmet>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </StaticRouter>
    </Provider>
  );
};

export const renderServerSideApp = (req, res, jsonData) => {
  // console.log("renderServer1", req, res, jsonData)
  Loadable.preloadAll()
    .then(() => fetchDataForRender(ServerApp, req))
    .then(data => renderApp(ServerApp, data, req, res, jsonData));
};

function renderApp(ServerApp, data, req, res, jsonData) {
  const context = {};
  const modules = [];

  let { storeData, helmetTags } = reactApplicationMiddleware(jsonData);

  data = Object.assign({}, data, {
    appReducer: {
      status: STATUS.FETCHING,
      data: storeData.bodyJSON
    }
  });

  const markup = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <ServerApp
        location={req.url}
        data={data}
        helmetTags={helmetTags}
        context={context}
      />
    </Loadable.Capture>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    const fullMarkup = indexHtml({
      helmet: Helmet.renderStatic(),
      serverData: data,
      bundles: getBundles(stats, modules),
      markup
    });

    res.status(200).send(fullMarkup);
  }
}

export function reactApplicationMiddleware(bodyJSON) {
  // const bodyJSON = JSON.parse(body);
  let helmetTags = getHelmetTags(bodyJSON);

  let storeData = {
    bodyJSON
  };

  return { storeData, helmetTags };
}
