import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import Markets from './components/Markets';

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
      <img
        style={{ width: '100%', height: '40vh', objectFit: 'cover', marginBottom: '5vh'}}
        src="https://www.klimexcm.com/wp-content/uploads/2019/03/Markets.jpg"
        alt="new"
      />
      {isLoggedIn &&
        <div>
          <h5> Hello {currentUser?.displayName} </h5>
          <Button variant="contained" onClick={handleLogout}>Log Out</Button>
        </div>
      }
      {!isLoggedIn &&
        <div style={{width: '30vh', margin: 'auto'}}>
          <Tabs centered value={selectedTab} onChange={handleSelectedTabChanged}
            style={{ marginBottom: '1vh' }}>
            <Tab label="Sign Up" value="signup"></Tab>
            <Tab label="Log In" value="login" />
          </Tabs>
          {selectedTab === "signup" ?
            <SignUp updateCurrentUser={updateCurrentUser} /> :
            <Login updateCurrentUser={updateCurrentUser} />
          }
        </div>
      }
      {isLoggedIn && <Markets />}
    </div>
  );
}

export default App;
