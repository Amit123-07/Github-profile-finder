import React, { useState } from 'react';
import searchIcon from "../Images/search-icon.svg";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search icon" />
      <input
        type="search"
        value={username}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search GitHub username..."
      />
      <div onClick={handleSearch} className="search-btn">Search</div>
    </div>
  );
};

export default SearchBar;
