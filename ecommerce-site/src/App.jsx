import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './assets/Signup';
import Login from './assets/Login';
import Homepage from './assets/Homepage';

const App = () => {
  const [loginuser, setLoginuser] = useState({});

  return (
    <Router>
      <div>
        <Routes>
        {/* <Route
           exact path="/home"
            element={
              loginuser && loginuser._id ? <Homepage /> : <Login setLoginuser= {setLoginuser} />
            }
          /> */}
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login setLoginuser={setLoginuser} />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 