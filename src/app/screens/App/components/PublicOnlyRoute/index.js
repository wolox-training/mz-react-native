import React from 'react';
import CustomRoute from '../CustomRoute';
import { hasUserAccess } from '../../../../utils/storageUtils';

export default ({ ...rest }) => (
  <CustomRoute {...rest} isAllowedAccess={!hasUserAccess()} redirectPath="/dashboard" />
);
