import React from 'react';
import CustomRoute from '../CustomRoute';
import { hasUserAccess } from '../../../../utils/storageUtils';
import NavBar from '../../shared/components/NavBar';

export default ({ ...rest }) => (
  <div>
    <NavBar />
    <CustomRoute {...rest} isAllowedAccess={hasUserAccess()} redirectPath="/login" />
  </div>
);
