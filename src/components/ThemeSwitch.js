import React from 'react';

const ThemeSwitch = ({ onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={onToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeSwitch;
