import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to='/mountain'>Mountain</Link></li>
        <li><Link to='/beach'>Beaches</Link></li>
        <li><Link to='/bird'>Birds</Link></li>
        <li><Link to='/food'>Food</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;