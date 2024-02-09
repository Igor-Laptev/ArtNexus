import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
