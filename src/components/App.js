import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { actions, getSchoolAction, getStates } from '../redux/actions';
import { connect } from 'react-redux';
import Home from '../routes/Home';
import MainHeader from './Header';

const mapStateToProps = state => ({ data: state });

const mapDispatchToProps = dispatch => ({
  loadSchoolData(host) {
    dispatch(getSchoolAction(host));
  },

  loadStates() {
    dispatch(getStates());
  },

  showSchoolData() {
    dispatch({ type: actions.SHOW_SCHOOL_DATA });
  }
});

const App = props => {
  useEffect(() => {
    if (!props.data) {
      props.loadSchoolData(window.location.host);
    } else {
      setTimeout(props.showSchoolData(), 1000);
    }
  }, []);
  return (
    <div className="app">
      <MainHeader />
      <Switch>
        <Route exact path="/" render={() => <Home {...props} />} />
      </Switch>
    </div>
  );
};

const MainWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default MainWrapper;
