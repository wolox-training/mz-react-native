import Cover from '../Cover';
import React from 'react';
import './styles.css';

export default function Notification() {
  return (
    <div className="notification">
      <Cover size="notification" />
      <div className="notification-info">
        <span className="notification-text">Se encuentra disponible el libro:</span>
        <span className="notification-title">Título</span>
        <span className="notification-author">Autor</span>
        <span className="notification-alert">Fecha de devolución: xx/xx/xx</span>
      </div>
    </div>
  );
}
