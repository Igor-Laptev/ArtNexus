import React, { useState } from 'react';
import './navbar.css'; // Убедитесь, что обновили путь к CSS файлу
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import { logOut } from '../auth/authSlice';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import { setEquel } from '../posts/postsSlice';

function NavBar(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showReg, setShowReg] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const [isClientsActive, setIsClientsActive] = useState(false);
  const [isServicesActive, setIsServicesActive] = useState(false);

  const handleModalReg = (value: boolean): void => {
    setShowReg(value);
  };

  const handleModalLog = (value: boolean): void => {
    setShowLog(value);
  };

  // Функция для переключения видимости подменю (если требуется)
  const toggleSubMenu = (menu) => {
    if (menu === 'clients') {
      setIsClientsActive(!isClientsActive);
      setIsServicesActive(false);
    } else if (menu === 'services') {
      setIsServicesActive(!isServicesActive);
      setIsClientsActive(false);
    }
  };

  return (
    <>
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <img
            src="styles/6bc29eb8c2f144d8401ef8303a90cd329fdfa3a2_medium.jpg"
            alt="Logo"
            className="logo"
          />
        </div>
        <ul className="navigation">
          {/* Сохраняем логику и навигационные ссылки вашего навбара */}
          <li className="parent">
            <NavLink className="link" to="/" onClick={() => dispatch(setEquel())}>
              Explore
            </NavLink>
          </li>
          {user ? (
            <>
              <li className="parent">
                <Link className="link" to={`/users/${user?.id}`}>
                  Hello, {user?.name}
                </Link>
              </li>
              <li className="parent">
                <NavLink className="link" to="/likes">
                  Избранное
                </NavLink>
              </li>
              <li className="parent">
                <NavLink className="link" to={`/users/${user?.id}`}>
                  Профиль
                </NavLink>
              </li>
              <li className="parent">
                <NavLink
                  className="link"
                  to="/"
                  onClick={() => {
                    dispatch(logOut()).catch(console.error);
                    navigate('/');
                  }}
                >
                  Выйти
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="parent">
                <button type="button" onClick={() => handleModalReg(!showReg)} className="link">
                  Зарегистрироваться
                </button>
              </li>
              <li className="parent">
                <button type="button" onClick={() => handleModalLog(!showLog)} className="link">
                  Войти
                </button>
              </li>
            </>
          )}
        </ul>
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
