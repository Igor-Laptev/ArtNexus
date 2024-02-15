import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import './auth.css';
import 'animate.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signIn } from './authSlice';

function SignIn({
  handleModalLog,
  show,
}: {
  show: boolean;
  handleModalLog: (value: boolean) => void;
}): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleLoginSuccess = () => {
    setIsAnimatingOut(true);

    setTimeout(() => {
      handleModalLog(false);
      navigate('/');
    }, 750);
  };
  const handleCloseWithAnimation = () => {
    setIsAnimatingOut(true); // Активируем анимацию выхода
    setTimeout(() => {
      handleModalLog(false); // Закрываем модальное окно после завершения анимации
    }, 750); // Задержка должна соответствовать длительности анимации
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signIn({ email, password })).then((result) => {
      if (!result.error) {
        handleLoginSuccess();
      }
    });
  };

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => handleModalLog(false)}
      contentLabel="Sign In Modal"
      style={{
        overlay: {
          position: 'absolute',
          zIndex: 1000,
          backgroundColor: 'rgba(54, 54, 54, 0.679)',
        },
      }}
      className={`modalback ${isAnimatingOut ? 'animate__animated animate__backOutDown' : 'animate__animated animate__fadeInDownBig'}`}
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
              {error && (
                <h1 style={{ color: 'red', textTransform: 'uppercase' }}>
                  Не правильный логин или пароль!
                </h1>
              )}
              <div className="form-group">
                <input
                  className={`form-control ${!isEmailValid ? 'is-invalid' : ''}`}
                  value={email}
                  placeholder="Enter email"
                  type="email"
                  required
                  onChange={(e) => {
                    const emailValue = e.target.value;
                    setEmail(emailValue);
                    setIsEmailValid(emailRegex.test(emailValue));
                    dispatch(clearError());
                  }}
                />
                {!isEmailValid && (
                  <div style={{ color: 'red' }}>Please enter a valid email address.</div>
                )}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={password}
                  placeholder="Enter password"
                  required
                  autoComplete="off"
                  type="password"
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success modal-button">
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-secondary modal-button"
                onClick={handleCloseWithAnimation}
              >
                Close
              </button>
            </form>
          </div>
          <div className="modal-footer animate__animated animate__heartBeat"></div>
        </div>
      </div>
    </ReactModal>
  );
}

export default SignIn;
