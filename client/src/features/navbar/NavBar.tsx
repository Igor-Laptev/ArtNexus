import React, { useState } from 'react';
import './navbar.css';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import { logOut } from '../auth/authSlice';
import SignUp from '../auth/SignUp';
import { setEquel } from '../posts/postsSlice';
import SignIn from '../auth/SignIn';

function NavBar(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showReg, setShowReg] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const handleModalReg = (value: boolean): void => {
    setShowReg(value);
  };
  const handleModalLog = (value: boolean): void => {
    setShowLog(value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="links">
          <div className="left-buttons">
            <li className="nav__item">
              <NavLink className="nav__link" to="/" onClick={() => dispatch(setEquel())}>
                Explore
              </NavLink>
            </li>
          </div>
          <li style={{ color: 'white' }}>
            {user ? (
              <>
                Hello, <Link to={`/users/${user?.id}`}>{user?.name}</Link>!
              </>
            ) : (
              'Гость'
            )}
          </li>
          <div className="right-buttons">
            <nav>
              {!user ? (
                <div>
                  <button
                    type="button"
                    onClick={() => handleModalReg(!showReg)}
                    className="nav__link"
                  >
                    Зарегистрироваться
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModalLog(!showLog)}
                    className="nav__link"
                  >
                    Войти
                  </button>
                </div>
              ) : (
                user && (
                  <>
                    <NavLink className="nav__link" to="/likes">
                      Избранное
                    </NavLink>
                    <NavLink className="nav__link" to={`/users/${user?.id}`}>
                      Профиль
                    </NavLink>
                    <li>
                      <NavLink
                        onClick={() => {
                          dispatch(logOut()).catch(console.log);
                          navigate('/');
                        }}
                        className="nav__link"
                        to="/"
                      >
                        Выйти
                      </NavLink>
                    </li>
                  </>
                )
              )}
            </nav>
          </div>
        </div>
      </nav>
      <Outlet />

      {showReg && (
        <SignUp show={showReg} handleModalReg={handleModalReg} handleModalLog={handleModalLog} />
      )}
      {showLog && <SignIn show={showLog} handleModalLog={handleModalLog} />}
    </>
  );
}

export default NavBar;
