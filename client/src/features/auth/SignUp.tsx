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
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: 'rgba(54, 54, 54, 0.679)',
        },
      }}
      className="modalback"
      isOpen={show}
      onRequestClose={() => handleModalReg(false)}
      contentLabel="Sign Up Modal"
    >
      <div className="modal-dialog animate__animated animate__fadeInDownBig">
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
                    handleModalReg(false); // Закрыть модальное окно регистрации
                    handleModalLog(true);
                    navigate('/sign-in'); // Открыть модальное окно авторизации
                  })
                  .catch(console.log),
                  navigate('/sign-in');
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
                  className="form-control"
                  value={email}
                  placeholder="Enter email"
                  type="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={avatar}
                  placeholder="Your Avatar"
                  type="text"
                  required
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={password}
                  placeholder="Enter password"
                  required
                  autoComplete="off"
                  type="password"
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
                  onChange={(e) => {
                    setRpassword(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-success modal-button ">
                Register
              </button>
              <button
                type="button"
                className="btn btn-secondary modal-button "
                onClick={() => handleModalReg(false)}
              >
                Close
              </button>
            </form>
          </div>
          <div className="modal-footer animate__animated animate__heartBeat "></div>
        </div>
      </div>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
    </ReactModal>
  );
}

export default SignUp;
