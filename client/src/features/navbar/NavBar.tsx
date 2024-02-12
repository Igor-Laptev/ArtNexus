import React from 'react';
import './navbar.css';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { logOut } from '../auth/authSlice';

function NavBar(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);
  console.log('user:', user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar">
        <div className="links">
          <div className="left-buttons">
            <li className="nav__item">
              <NavLink className="nav__link" to="/"></NavLink>
            </li>
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
          <li>Hello, {user?.name}!</li>
          <div className="right-buttons">
            <NavLink className="nav__link" to="/sign-up">
              Зарегистрироваться
            </NavLink>
            <NavLink className="nav__link" to="/sign-in">
              Войти
            </NavLink>
            <li
              onClick={() => {
                dispatch(logOut()).catch(console.log);
                navigate('/');
              }}
              className="nav__item"
            >
              <NavLink className="nav__link" to="/logout">
                Выйти
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
