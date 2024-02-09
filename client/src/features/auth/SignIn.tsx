import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Autorization</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            signIn({
              email,
              password,
            }),
          ).catch(console.log);
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
            setPasssword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
/////
