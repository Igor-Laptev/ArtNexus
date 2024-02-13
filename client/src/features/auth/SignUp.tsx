import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';

function SignUp(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Registration
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          navigate('/sign-in');
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
          placeholder="Your Avatar"
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <h1>Registration</h1>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
     
    </div>
  );
}

export default SignUp;
