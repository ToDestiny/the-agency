import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/myjournal">Mon Journal</Link>
    </nav>
  );
}

export default Header;
