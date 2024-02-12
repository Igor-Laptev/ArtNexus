import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  return (
    <div>
      <h1>Autorization</h1>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            signIn({
              email,
              password,
            }),
          ).catch(console.log);
          // navigate('/');
        }}
      >
        <input
          value={email}
          placeholder="Enter email"
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="Enter password"
          required
          autoComplete="off"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;

