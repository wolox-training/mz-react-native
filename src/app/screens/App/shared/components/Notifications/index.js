import React from 'react';
import Notification from '../Notification';
import './styles.css';

export default function Notifications() {
  return (
    <div className="notifications">
      <Notification />
      <hr className="separator" />
      <Notification />
    </div>
  );
}
