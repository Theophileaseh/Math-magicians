import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Header = () => (
  <div className="header">
    <div className="logo">
      <h2 className="logo-text">Math Magicians</h2>
    </div>
    <div className="navigation">
      <Link to="/" className="links border">Home</Link>
      <Link to="/calculator" className="links border">Calculator</Link>
      <Link to="/quote" className="links">Quote</Link>
    </div>
  </div>
);

export default Header;
