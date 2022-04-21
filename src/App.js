import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import {
  Navbar
} from './components/Navbar';
import {
  About
} from './components/About';
import {
  Contact
} from './components/Contact';
import {
  Users
} from './components/Users';
import {
  Login
} from './components/Login';
import {
  UsersDetails
} from './components/UsersDetails';
import {
  Home
} from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:userId" element={<UsersDetails />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
