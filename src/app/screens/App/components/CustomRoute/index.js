import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

const CustomRoute =  ({ component: Component, ...rest, authFunction, redirectPath }) => (
  <Route
    {...rest}
    render={props =>
      authFunction() ? (
        <Component {...props} />
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
  authFunction: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired
};
