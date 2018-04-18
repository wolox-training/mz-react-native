import React from 'react';
import CustomRoute from '../CustomRoute';
import { hasUserAccess } from '../../../../utils/storageUtils';
import { negate } from '../../../../utils/negate';

export default ({ ...rest }) => (
  <CustomRoute {...rest} isAllowedAccess={negate(hasUserAccess)} redirectPath="/dashboard" />
);
