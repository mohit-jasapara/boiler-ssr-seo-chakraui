import path from 'path';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import responseTime from 'response-time';
import bodyParser from 'body-parser';

import { renderServerSideApp } from './renderServerSideApp';
import { todoRoutes } from './todoApi';
import Axios from 'axios';
import BASE_URL from '../src/common/BaseUrl';

const { PUBLIC_URL = '' } = process.env;

// This export is used by our initialization code in /scripts
export const app = express();

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

// Serve generated assets
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, '../build'), {
    maxage: Infinity
  })
);

// Serve static assets in /public
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, '../public'), {
    maxage: '30 days'
  })
);

app.use(morgan('tiny'));

// The React application middleware.
app.get('*', (request, response) => {
  /* log({
    title: 'Request',
    level: 'special',
    message: `Received for "${request.url}" and host "${request.get('host')}"`,
  }); */

  Axios.request({
    url: `${BASE_URL}/v1/school/url?include=website,state,departments`,
    method: 'get',
    data: { url: request.get('host') },
    responseType: 'json'
  })
    .then(data => {
      // console.log({
      //     title: 'Response',
      //     level: 'special',
      //     message: `Data: ${JSON.stringify(data.data.data)}`
      //   });
      renderServerSideApp(request, response, JSON.stringify(data.data.data));
    })
    .catch(error => {
      console.log({
        title: 'Error',
        level: 'error',
        message: `Error: "${error}"`
      });
    });
});

// app.use(renderServerSideApp);
