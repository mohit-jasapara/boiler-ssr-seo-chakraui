import path from 'path';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { renderServerSideApp } from './renderServerSideApp';
import { getSeoData } from './seoDataApi'; 
import Axios from 'axios';

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

  fetchSeoData(request, response);

});

function fetchSeoData(request, response) {

  /* host example
  let host = request.get('host');
  // console.log({host, data: getSeoData(host == "localhost:3000" ? "host1" : "host2")});

  let data = getSeoData(host == "localhost:3000" ? "host1" : "host2");
  */

  // query params example
  let query = request.query.host
  // console.log({query: data: getSeoData(query)});
  let data = getSeoData(query);

  renderServerSideApp(request, response, data);

  /* you can also fetch data from backend api or database like in following example */
  // Axios.request({
  //   url: `your_url_here`,
  //   method: 'get',
  //   data: { host },
  //   responseType: 'json'
  // })
  //   .then(data => {
  //     // console.log({
  //     //     title: 'Response',
  //     //     level: 'special',
  //     //     message: `Data: ${JSON.stringify(data)}`
  //     //   });
  //     renderServerSideApp(request, response, JSON.stringify(data));
  //   })
  //   .catch(error => {
  //     console.log({
  //       title: 'Error',
  //       level: 'error',
  //       message: `Error: "${error}"`
  //     });
  //   });
}
