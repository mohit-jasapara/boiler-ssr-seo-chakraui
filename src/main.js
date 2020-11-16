import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './components/App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const serverData = window.__SERVER_DATA__;
// delete window.__PRELOADED_STATE__;
const store = configureStore(serverData);

export const main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
