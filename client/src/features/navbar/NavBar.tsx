import React from 'react';
import './navbar.scss';

import { Outlet } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <a className="" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="" href="#">
            Features
          </a>
          <a className="" href="#">
            Pricing
          </a>
          <a className="" href="#">
            Disabled
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
