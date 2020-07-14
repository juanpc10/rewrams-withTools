import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
// import _ from 'lodash';

import { useFormik } from 'formik';

import { registerUserWithEmail } from '../../store/actions/registerActions';
import { registerSchema } from './validation';
import './Register.css';

const Register = ({ auth, register: { isLoading, error }, history, registerUserWithEmail }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerUserWithEmail(values, history);
    },
  });

  if (auth.isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="register">

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
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className="form-elements">

            <div  className="login-form-headers">
              <h4>Create a new account</h4>       
            </div>

            <div className="input-register-fields">
              <input
                placeholder="Name"
                name="name"
                className=""
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="error">{formik.errors.name}</p>
              ) : null}
              <input
                placeholder="Username"
                name="username"
                className=""
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="error">{formik.errors.username}</p>
              ) : null}
              <input
                placeholder="Email address"
                name="email"
                className=""
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
                className=""
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error">{formik.errors.password}</p>
              ) : null}
              </div>
              {error && <p className="error">{error}</p>}
              <div>
                <button className="btn submit" type="submit" disabled={isLoading || !formik.isValid}>
                  Sign up now
                </button>
              </div>
              <div> Have an account?{' '}
                <Link className="login-button-register-page" to="/login">
                  Log In
                </Link>
              </div>

            </div>
          </form>
        </div> 






      {/* <div className="container">
        <form onSubmit={formik.handleSubmit} noValidate>
          <h2>Create new account</h2>
          <div>
            <input
              placeholder="Name"
              name="name"
              className=""
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="error">{formik.errors.name}</p>
            ) : null}
            <input
              placeholder="Username"
              name="username"
              className=""
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
            <input
              placeholder="Email address"
              name="email"
              className=""
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
              className=""
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </div>
          {error && <p className="error">{error}</p>}
          <div>
            <button className="btn submit" type="submit" disabled={isLoading || !formik.isValid}>
              Sign up now
            </button>
          </div>
          <div>
            Have an account?{' '}
            <Link className="bold" to="/login">
              Log In
            </Link>
          </div>
        </form>
      </div> */}


    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  register: state.register,
});

export default compose(withRouter, connect(mapStateToProps, { registerUserWithEmail }))(Register);
