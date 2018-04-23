import React from 'react';
import Notification from '../Notification';
import './styles.css';
import {
  BOOK_AVAILABLE_NOTIFICATION,
  TITLE,
  AUTHOR,
  ALERT_NOTIFICATION,
  RETURN_DATE_NOTIFICATION
} from './strings';

export default function Notifications() {
  return (
    <div className="notifications">
      <Notification text={BOOK_AVAILABLE_NOTIFICATION} title={TITLE} author={AUTHOR} />
      <hr className="separator" />
      <Notification
        text={RETURN_DATE_NOTIFICATION}
        title={TITLE}
        author={AUTHOR}
        alert={ALERT_NOTIFICATION}
      />
    </div>
  );
}
