import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProfileInfo from './components/ProfileInfo';
import ThemeSwitch from './components/ThemeSwitch';
import Loader from './components/Loader';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async (username) => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="header">
          <div className="title">Developer's Profile</div>
          <ThemeSwitch onToggle={toggleTheme} />
        </div>
        <SearchBar onSearch={fetchData} />
        {loading ? (
          <Loader />
        ) : (
          userData && <ProfileInfo data={userData} />
        )}
      </div>
    </div>
  );
};

export default App;
