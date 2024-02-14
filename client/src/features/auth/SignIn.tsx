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

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => handleModalLog(false)}
      contentLabel="Sign In Modal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  signIn({
                    email,
                    password,
                  }),
                )
                  .then(() => {
                    handleModalLog(false); // Закрыть модальное окно авторизации
                    navigate('/'); // Перенаправление на главную страницу
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
              <button type="submit" className="btn btn-success">
                Sign In
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleModalLog(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
    </ReactModal>
  );
}

export default SignIn;
