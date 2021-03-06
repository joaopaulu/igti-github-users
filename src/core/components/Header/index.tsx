import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <nav className="row bg-primary main-nav">
    <div className="col-4">
      <Link to="/" className="nav-logo-text">
        <h4>REA - Desenvolvimento Reativo</h4>
      </Link>
    </div>
  </nav>
);

export default Header;
