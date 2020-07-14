import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import { GlobalProvider } from './context/globalState';



import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Campaigns from './pages/Campaigns/campaigns';
import Profile from './pages/Profile/Profile';
import More from './pages/More/more';
import NotFound from './pages/NotFound/NotFound';
import Admin from './pages/Admin/Admin';

import Loader from './components/Loader/Loader';

import { logInUserWithOauth, loadMe } from './store/actions/authActions';

const App = ({ logInUserWithOauth, auth, loadMe }) => {
  useEffect(() => {
    loadMe();
  }, [loadMe]);

  //redosled hookova
  useEffect(() => {
    if (window.location.hash === '#_=_') window.location.hash = '';

    const cookieJwt = Cookies.get('x-auth-cookie');
    if (cookieJwt) {
      Cookies.remove('x-auth-cookie');
      logInUserWithOauth(cookieJwt);
    }               // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!auth.appLoaded && !auth.isLoading && auth.token && !auth.isAuthenticated) {
      loadMe();
    }
  }, [auth.isAuthenticated, auth.token, loadMe, auth.isLoading, auth.appLoaded]);

  return (
    <>
      {auth.appLoaded ? (
        <GlobalProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/admin" component={Admin} />

            {/* <Route path="/about" component={Home} /> */}
            <Route path="/more" component={More} />
            <Route path="/:username/dashboard" component={Dashboard} />
            <Route path="/:username/campaigns" component={Campaigns} />
            <Route exact path="/:username" component={Profile} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </GlobalProvider>

      ) : (
        <Loader />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logInUserWithOauth, loadMe }))(App);
