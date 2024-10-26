import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

const Header = () => {
  return (
    <HashRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </HashRouter>
  );
};

export default Header;