import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/LogIn';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import { logout } from './Firebase';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedTab, setSelectedTab] = useState("signup")

  const updateCurrentUser = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  }

  const handleSelectedTabChanged = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  }

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {isLoggedIn &&
        <div>
          <h5> Hello {currentUser?.displayName} </h5>
          <Button variant="contained" onClick={handleLogout}>Log Out</Button>
        </div>
      }
      <Tabs value={selectedTab} onChange={handleSelectedTabChanged}>
        <Tab label="Sign Up" value="signup"/>
        <Tab label="Log In" value="login"/>
      </Tabs>
      {selectedTab === "signup" ?
        <SignUp updateCurrentUser={updateCurrentUser} /> :
        <Login updateCurrentUser={updateCurrentUser} />
      }
    </div>
  );
}

export default App;
