import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { useFormik } from 'formik';

import { compose } from 'redux';
import { connect } from 'react-redux';
// import _ from 'lodash';

import { loginUserWithEmail } from '../../store/actions/authActions';
import { FACEBOOK_AUTH_LINK, GOOGLE_AUTH_LINK } from '../../constants';
import { loginSchema } from './validation';
import './Login.css';

const Login = ({ auth, history, loginUserWithEmail }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginUserWithEmail(values, history);
    },
  });

  if (auth.isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="login">

      <div className="rewrams-logo-buttons">
        <Link to='/'>
          <button>
            <img src='https://seguidores.online/wp-content/uploads/2019/08/dm-en-instagram.png' alt='rewrams-logo'></img>
          </button>
        </Link>
        <Link to='/'>
          <a href='/'>Rewrams</a>
        </Link>
      </div>



      <div className="form-container">
          <form onSubmit={formik.handleSubmit} >
            <div className="form-elements">
            
              <div className="login-form-headers">
                <h4 className="login-social-media" >Log in with social media</h4>
              </div>

              <div className="social-media-login-buttons">
                <a className="fb btn" href={FACEBOOK_AUTH_LINK}>
                  <i className="fa fa-facebook fa-fw" /> Facebook
                </a>
                <a className="google btn" href={GOOGLE_AUTH_LINK}>
                  <i className="fa fa-google fa-fw" /> Google
                </a>
              </div>
              <div  className="login-form-headers">
                <h4>Login with email address</h4>       
              </div>
              <div className="inputs-email-form">
                <input
                  placeholder="Email address"
                  name="email"
                  className="text"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              {auth.error && <p className="error">{auth.error}</p>}
              <div>
                <button
                  id="loginform-button"
                  className="btn submit"
                  disabled={auth.isLoading || !formik.isValid}
                  type="submit"
                >
                  Log in
                </button>
              </div>
              <div>
                Don't have an account?{' '}
                <Link className="register-link" to="/register">
                  Register
                </Link>
              </div>


            </div>
          </form>
        </div> 


    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(withRouter, connect(mapStateToProps, { loginUserWithEmail }))(Login);
