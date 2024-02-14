import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './auth.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RootState, useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';

function SignIn({
  handleModalLog,
  show,
}: {
  show: boolean;
  handleModalLog: (value: boolean) => void;
}): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let error = useSelector((store: RootState) => store.auth.error);
  console.log('error:', typeof error);

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
      onRequestClose={() => handleModalLog(false)}
      contentLabel="Sign In Modal"
    >
      <div className="modal-dialog animate__animated animate__fadeInDownBig">
        <div className="modal-content">
          <div className="modal-body">
            {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>Пользователь не найден!</h1>}
            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  signIn({
                    email,
                    password,
                  }),
                )
                  .then(() => {
                    if (error === undefined) {
                      handleModalLog(true);
                      clearError(error) // ask Tolya
                    } else {
                      handleModalLog(false);
                      navigate('/');
                    }
                  })
                  .catch(console.log);
              }}
            >
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
              <button type="submit" className="btn btn-success modal-button">
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-secondary modal-button"
                onClick={() => {
                  handleModalLog(false) ;
                }}
              >
                Close
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </ReactModal>
  );
}

export default SignIn;
