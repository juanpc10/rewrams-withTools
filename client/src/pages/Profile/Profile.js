import React, { useEffect, useState, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import { getProfile, editUser, deleteUser } from '../../store/actions/userActions';
import { loadMe } from '../../store/actions/authActions';
import Layout from '../../layout/Layout';
import Loader from '../../components/Loader/Loader';
import requireAuth from '../../hoc/requireAuth';
import { profileSchema } from './validation';

import './Profile.css';








const Profile = ({
  getProfile,
  user: { profile, isLoading, error },
  auth: { me },
  editUser,
  deleteUser,
  loadMe,
  history,
  match,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const retryCount = useRef(0);

  console.log(match);
  const matchUsername = match.params.username;
  useEffect(() => {
    getProfile(matchUsername, history);   // eslint-disable-next-line
  }, [matchUsername]);


  // if changed his own username reload me, done in userActions

  const onChange = (event) => {
    formik.setFieldValue('image', event.currentTarget.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
    setAvatar(event.target.files[0]);
  };

  const handleClickEdit = () => {
    retryCount.current = 0;
    setIsEdit((oldIsEdit) => !oldIsEdit);
    setImage(null);
    setAvatar(null);
    formik.setFieldValue('id', profile.id);
    formik.setFieldValue('name', profile.name);
    formik.setFieldValue('username', profile.username);
  };
  // eslint-disable-next-line
  const handleDeleteUser = (id, history) => {   
    deleteUser(id, history);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: '',
      name: '',
      username: '',
      password: '',
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('name', values.name);
      formData.append('username', values.username);
      if (profile.provider === 'email') {
        formData.append('password', values.password);
      }
      editUser(values.id, formData, history);
      //setIsEdit(false);
    },
  });

  return (
    <Layout>
      <div className="profile">

        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-container">

          <div className="profile-picture">
            <img src={image ? image : profile.avatar} className="avatar" alt="avatar-profile" />
          </div>
          <div className="profile-info">
              <div className="profile-data-row">
                <p className="label">Name: </p>
                <p className="info">{profile.name}</p>
              </div>
              <div className="profile-data-row">
                <p className="label">Login: </p>
                <p className="info">{profile.provider}</p>
              </div>      
              <div className="profile-data-row">
                <p className="label">Username: </p>
                <p className="info">{profile.username}</p>
              </div>
              <div className="profile-data-row">
                <p className="label">Email: </p>
                <p className="info">{profile.email}</p>
              </div>
              <div className="profile-data-row">
                <p className="label">Joined: </p>
                <p className="info">
                  {moment(profile.createdAt).format('dddd, MMMM Do YYYY')}
                </p>
              </div>
          </div>

        {/* </div> */}

        {isLoading ? (
          <Loader />
        ) : (
          
          <div className="profile-button-area">
            <div className="info-container">
              <div>
                <button
                  id="profile-edit-button"
                  className="btn"
                  type="button"
                  onClick={handleClickEdit}
                  disabled={!(me?.username === profile.username || me?.role === 'ADMIN')}
                >
                  {isEdit ? 'Cancel' : 'Edit'}
                </button>
              </div>
            </div>
          </div>
          
        )}

        {error && <p className="error">{error}</p>}

        {isEdit && (
          <div className="form-edit-cancel-profile">




            <div className="profile-edit-form-container">
              <form onSubmit={formik.handleSubmit} >
                <div className="form-elements">
                  <div className="edit-profile labels">
                    <label id="label-image">Image:</label>
                    <input   name="image" type="file" onChange={onChange} />
                    {image && (
                      <button
                        id="choose-file-btn"
                        onClick={() => {
                          setImage(null);
                          setAvatar(null);
                        }}
                        type="button"
                      >
                        Remove Image
                      </button>
                    )}
                </div>
              <input name="id" type="hidden" value={formik.values.id} />
              <div className="input-div">
                <label id="label-name">Name:</label>
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
              </div>
              <div className="input-div">
                <label id="label-username" >Username:</label>
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
              </div>
              {profile.provider === 'email' && (
                <div className="input-div">
                  <label id="label-password">Password:</label>
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
              )}
              <button type="submit" className="btn">
                Save
              </button>
              {/* <button
                onClick={() => handleDeleteUser(profile.id, history)}
                type="button"
                className="btn"
              >
                Delete profile
              </button> */}
                  
                </div>
              </form>
            </div> 
          







            {/* <form onSubmit={formik.handleSubmit}>
              <div>
                <label>Avatar:</label>
                <input name="image" type="file" onChange={onChange} />
                {image && (
                  <button
                    className="btn"
                    onClick={() => {
                      setImage(null);
                      setAvatar(null);
                    }}
                    type="button"
                  >
                    Remove Image
                  </button>
                )}
              </div>
              <input name="id" type="hidden" value={formik.values.id} />
              <div className="input-div">
                <label>Name:</label>
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
              </div>
              <div className="input-div">
                <label>Username:</label>
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
              </div>
              {profile.provider === 'email' && (
                <div className="input-div">
                  <label>Password:</label>
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
              )}
              <button type="submit" className="btn">
                Save
              </button>
              <button
                onClick={() => handleDeleteUser(profile.id, history)}
                type="button"
                className="btn"
              >
                Delete profile
              </button>
            </form> */}
          </div> 
        )}

        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

export default compose(
  requireAuth,
  withRouter,
  connect(mapStateToProps, { getProfile, editUser, deleteUser, loadMe }),
)(Profile);








