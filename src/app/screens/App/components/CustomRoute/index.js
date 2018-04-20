import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import NavBar from '../../shared/components/NavBar';

const CustomRoute =  ({ component: Component, ...rest, isAllowedAccess, redirectPath }) => (
  <Route
    {...rest}
    render={props =>
      isAllowedAccess ? (
        <div>
          <NavBar/>
          <Component {...props} />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: redirectPath,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default CustomRoute;

CustomRoute.propTypes = {
  isAllowedAccess: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired
};
