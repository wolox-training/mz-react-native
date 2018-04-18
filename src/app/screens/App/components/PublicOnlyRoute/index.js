import React from 'react';
import CustomRoute from '../CustomRoute';

function isAllowedAccess() {
  return !localStorage.getItem('currentUser');
}

export default ({ ...rest }) => (
  <CustomRoute {...rest} isAllowedAccess={isAllowedAccess} redirectPath="/dashboard" />
);
