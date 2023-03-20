import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Header = () => {
  const activeLink = (isActive) => (isActive ? {
    background: 'rgb(99 0 99)', color: '#fff', borderRadius: '3px', padding: '5px 15px',
  } : undefined);

  return (
    <div className="header">
      <div className="logo">
        <h2 className="logo-text">Math Magicians</h2>
      </div>
      <div className="navigation">
        <NavLink to="/" style={({ isActive }) => activeLink(isActive)} className="links">
          Home
        </NavLink>
        <NavLink to="/calculator" style={({ isActive }) => activeLink(isActive)} className="links">
          Calculator
        </NavLink>
        <NavLink to="/quote" style={({ isActive }) => activeLink(isActive)} className="links">
          Quote
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
