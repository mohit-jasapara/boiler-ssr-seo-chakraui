import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './components/App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import MainReducer from './redux/reducers/MainReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const serverData = window.__SERVER_DATA__;
const store = createStore(MainReducer, serverData, applyMiddleware(thunk));

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
