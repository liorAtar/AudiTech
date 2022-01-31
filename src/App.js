import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/LogIn';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedTab, setSelectedTab] = useState("signup")

  const updateCurrentUser = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  }

  const handleSelectedTabChanged = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  }

  return (
    <div className="App">
      Hello {currentUser?.displayName}
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
