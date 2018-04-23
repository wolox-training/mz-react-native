import React from 'react';
import './styles.css';

export default function Droppable({ children, showDropdown, dropdown }) {
  return (
    <div className="droppable-container">
      {children}
      {showDropdown && <div className="arrow" />}
      {showDropdown && dropdown}
    </div>
  );
}
