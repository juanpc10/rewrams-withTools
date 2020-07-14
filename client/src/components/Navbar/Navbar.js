import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOutUser } from '../../store/actions/authActions';
import './styles.css';

const Navbar = ({ auth, logOutUser, history }) => {
  const onLogOut = (event) => {
    event.preventDefault();
    logOutUser(history);
  };

  return (
    <nav className="navbar">

      <div className="left-side-nav">
        <Link to='/'>
          <button>
            <img src='https://seguidores.online/wp-content/uploads/2019/08/dm-en-instagram.png' alt='rewrams-logo'></img>
          </button>
        </Link>
        <Link to='/'>
          <a href='/'>Rewrams</a>
        </Link>
      </div>

      <ul className="nav-links flex-1">

        {auth.isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to={`/${auth.me.username}/dashboard`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to={`/${auth.me.username}/campaigns`}>Admin</Link>
            </li>
            <li className="nav-item">
              <Link to={`/${auth.me.username}`}>Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/more">More</Link>
            </li>
            {auth.me?.role === 'ADMIN' && (
              <li className="nav-item">
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li className="flex-1" />
            <img className="avatar" src={auth.me.avatar} alt="avatar-img" />
            <li className="nav-item" onClick={onLogOut}>
              <a href="/">Log out</a>
            </li>
          </>
        ) : (
          <>

            <li className="flex-1" />
              <li className="nav-item">  
                <Link to="/login"  id="login-button">Login</Link>
              </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(withRouter, connect(mapStateToProps, { logOutUser }))(Navbar);
