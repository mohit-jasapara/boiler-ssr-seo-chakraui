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
import { ServerDataProvider } from '../src/state/serverDataContext';
import store from '../src/redux/store';
import { Provider } from 'react-redux';
import getData, { keys } from '../src/data';
import _ from 'lodash';
import { getMenu } from '../src/data/Menu';
import { ChakraProvider } from '@chakra-ui/core';

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

  data = Object.assign({}, data, storeData);

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

function reactApplicationMiddleware(body) {
  const school = JSON.parse(body);
  const schoolName = _.toLower(getData(school, keys.NAME));
  const schoolCity = getData(school, keys.CITY);
  const schoolState = getData(school, keys.STATE);
  const helmetTags = [
    <title key="title">{_.toUpper(schoolName)} | School Website</title>,
    <meta key="title-meta" name="title" content={schoolName} />,
    <meta
      key="description"
      name="description"
      content={getData(school, keys.INTRO)}
    />,
    <meta
      key="keywords"
      name="keywords"
      content={[
        schoolName,
        ...schoolName.split(' '),
        getData(school, keys.ADDRESS),
        schoolCity,
        `Best School in ${schoolCity}`,
        `Top School in ${schoolCity}`,
        `List of schools in ${schoolCity}`,
        `Best School in ${schoolState}`,
        `Top School in ${schoolState}`,
        getData(school, keys.EMAIL),
        getData(school, keys.PRIMARY_CONTACT),
        getData(school, keys.PINCODE),
        'Schoollog',
        'SCHOOLLOG'
      ].join(',')}
    />,
    <meta
      key="geo.position"
      name="geo.position"
      content={`${getData(school, keys.MAP_LATITUDE)}; ${getData(
        school,
        keys.MAP_LONGITUDE
      )}`}
    />,
    <meta
      key="geo.placename"
      name="geo.placename"
      content={`${getData(school, keys.ADDRESS)} ${schoolCity}`}
    />,
    <meta key="geo.region" name="geo.region" content={schoolState} />,
    <meta key="robots" name="robots" content="index,follow" />,
    <meta key="coverage" name="coverage" content="Worldwide" />
  ];

  let storeData = {
    school: school,
    status: 'FETCHING',
    menu: getMenu(
      school.features
        ? _.union(school.features, [
            1,
            2,
            3,
            15,
            17,
            18,
            19,
            20,
            21,
            32,
            43,
            44
          ])
        : [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            23,
            33,
            43,
            44
          ]
    )
  };

  return { storeData, helmetTags };
}
