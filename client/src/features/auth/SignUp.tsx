import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispath } from '../../redux/store';
import { clearError, signUp } from './authSlice';

const SignUp = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispath();

  return (
    <div>
      <h1>Registration</h1>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
      <form
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
          ).catch(console.log);
        }}
      >
        <input
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
          value={avatar}
          placeholder="pic"
          type="text"
          required
          onChange={(e) => {
            setAvatar(e.target.value);
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
        <input
          value={rpassword}
          placeholder="Enter password"
          required
          autoComplete="off"
          type="password"
          onChange={(e) => {
            setRpasssword(e.target.value);
          }}
        />
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default SignUp;
