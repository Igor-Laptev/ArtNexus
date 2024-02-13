import React from 'react';
import './navbar.css';

import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type{ RootState } from '../../redux/store';
import { logOut } from '../auth/authSlice';

function NavBar(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar">
        <div className="links">
          <div className="left-buttons">
            <li className="nav__item">
              <NavLink className="nav__link" to="/moderator">
                Модерация
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                Explore
              </NavLink>
            </li>
          </div>
          <li style={{ color: 'white' }}>Hello, <Link to={`/users/${user?.id}`}>{user?.name}</Link>!</li>
          <div className="right-buttons">
            <nav>
              {!user ? (
                <>
                  <NavLink className="nav__link" to="/sign-up">
                    Зарегистрироваться
                  </NavLink>
                  <NavLink className="nav__link" to="/sign-in">
                    Войти
                  </NavLink>
                </>
              ) : (
                user && (
                  <>
                    <li>Hello, {user?.name}!</li>

                    <NavLink className="nav__link" to="/">
                      Избранное
                    </NavLink>
                    <NavLink className="nav__link" to="/">
                      Профиль
                    </NavLink>
                    <li
                      onClick={() => {
                        dispatch(logOut()).catch(console.log);
                        navigate('/');
                      }}
                      className="nav__item"
                    ></li>
                    <NavLink className="nav__link" to="/logout">
                      Выйти
                    </NavLink>
                  </>
                )
              )}
            </nav>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
