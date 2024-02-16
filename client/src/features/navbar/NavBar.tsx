import React, { useState } from 'react';
import './navbar.css'; // Убедитесь, что обновили путь к CSS файлу
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import { logOut } from '../auth/authSlice';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import { setEquel } from '../posts/postsSlice';
import Footer from '../footer/Footer';

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
  const toggleSubMenu = (menu: string) => {
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

          <span className="productionText">Inc.</span>

        </div>
        <ul className="navigation">
          <li className="parent">
            <NavLink className="link" to="/" onClick={() => dispatch(setEquel())}>
              Explore
            </NavLink>
          </li>
          {user ? (
            <>
             
              <li className="parent">
                <NavLink className="link" to="/likes">
                  Favorites
                </NavLink>
              </li>
              <li className="parent">
                <NavLink className="link" to={`/users/${user?.id}`}>
                  Profile
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
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="parent">
                <button type="button" onClick={() => handleModalReg(!showReg)} className="link">
                  Sign-Up
                </button>
              </li>
              <li className="parent">
                <button type="button" onClick={() => handleModalLog(!showLog)} className="link">
                  Sign-In
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Outlet />
      <Footer />
      {showReg && (
        <SignUp show={showReg} handleModalReg={handleModalReg} handleModalLog={handleModalLog} />
      )}
      {showLog && <SignIn show={showLog} handleModalLog={handleModalLog} />}
    </>
  );
}

export default NavBar;
