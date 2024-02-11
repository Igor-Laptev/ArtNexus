import React from 'react';
import './navbar.css';

import { NavLink, Outlet } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <div className="left-buttons">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                Explore
              </NavLink>
            </li>
            <NavLink className="nav__link" to="/">
              Избранное
            </NavLink>
            <NavLink className="nav__link" to="/">
              Профиль
            </NavLink>
          </div>
          <div className="right-buttons">
            <NavLink className="nav__link" to="/">
              Зарегистрироваться
            </NavLink>
            <NavLink className="nav__link" to="/">
              Войти
            </NavLink>
            <NavLink className="nav__link" to="/">
              Выйти
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
