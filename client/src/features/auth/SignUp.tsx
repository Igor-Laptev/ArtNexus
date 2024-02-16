import React, { useState } from 'react';
import ReactModal from 'react-modal';
import 'animate.css';
import './auth.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';

function SignUp({
  handleModalReg,
  handleModalLog,
  show,
}: {
  show: boolean;
  handleModalReg: (value: boolean) => void;
  handleModalLog: (value: boolean) => void;
}): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const avatar ='https://chop-1.ru/images/YARcuLmIMo_KQSrF8RAjMN9ghec=/1920x/8c0aaa13c9b30d1879f6089121aaf6d9.jpeg';

  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleRegistrationSuccess = (): void => {
    setIsAnimatingOut(true);

    setTimeout(() => {
      handleModalReg(false);
      handleModalLog(true);
      navigate('/');
    }, 750);
  };

  const handleCloseWithAnimation = (): void => {
    setIsAnimatingOut(true); // Активируем анимацию выхода
    setTimeout(() => {
      handleModalReg(false); // Закрываем модальное окно после завершения анимации
    }, 750); // Задержка должна соответствовать длительности анимации
  };

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => handleModalReg(false)}
      contentLabel="Sign Up Modal"
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
            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  signUp({
                    name,
                    email,
                    avatar,
                    password,
                    rpassword,
                    isAdmin: false,
                  }),
                )
                  .then(() => {
                    handleRegistrationSuccess();
                  })
                  .catch(console.log);
              }}
            >
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                  pattern="\S(.*\S)?"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                    dispatch(clearError());
                  }}
                />
              </div>
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={rpassword}
                  placeholder="Repeat password"
                  required
                  autoComplete="off"
                  type="password"
                  minLength={8}
                  onChange={(e) => {
                    setRpassword(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success modal-button"
                disabled={!isEmailValid}
              >
                Register
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
          <div className="modal-footer animate__animated animate__heartBeat "/>
        </div>
      </div>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
    </ReactModal>
  );
}

export default SignUp;
