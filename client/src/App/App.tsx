import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../features/auth/SignUp';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
        </Route> */}
        <Route index element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
