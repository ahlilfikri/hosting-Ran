import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Fungsi untuk memeriksa status login
const isAuthenticated = () => {
  const isLoggedIn = sessionStorage.getItem('token') ? true : false;
  return isLoggedIn;
};

// Komponen HOC untuk proteksi rute
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? <Component {...props} /> : <Redirect to="/login/cms" />
        }
    />
);

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
