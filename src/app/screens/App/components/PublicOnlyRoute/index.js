import React from 'react';
import CustomRoute from '../CustomRoute';

function authFunction() {
  return !localStorage.getItem('currentUser');
}

export default ({ ...rest }) => (
  <CustomRoute {...rest} authFunction={authFunction} redirectPath="/dashboard" />
);
