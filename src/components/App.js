import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { actions, fetchHostDataAction } from '../redux/actions';
import { connect } from 'react-redux';
import Home from '../routes/Home';
import MainHeader from './Header';
import STATUS from '../Constants';
import { Skeleton } from '@chakra-ui/core';

const mapStateToProps = state => ({ appReducer: state.appReducer });

const mapDispatchToProps = dispatch => ({
  fetchHostData(host) {
    dispatch(fetchHostDataAction(host));
  },

  showHostData() {
    dispatch({ type: actions.SHOW_HOST_DATA });
  }
});

const App = props => {
  useEffect(() => {
    if (!props.appReducer) {
      props.fetchHostData(window.location.host);
    } else {
      setTimeout(props.showHostData(), 2000);
    }
  }, []);
  console.log('App', props);
  return props.appReducer.status != STATUS.SUCCESS ? (
    <Skeleton height="25px" />
  ) : (
    <div className="app">
      <MainHeader data={props.appReducer.data} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home data={props.appReducer.data} />}
        />
      </Switch>
    </div>
  );
};

const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(App);
export default MainWrapper;
