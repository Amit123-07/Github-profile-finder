import React from 'react';
import Location from "../Images/location-icon.svg"
import Email from "../Images/email-icon.svg"
import Organization from "../Images/organization-icon.svg"
import Twitter from "../Images/twitter-icon.svg"

const ProfileInfo = ({ data }) => {
  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    location,
    email,
    twitter_username,
    company,
    created_at
  } = data;

  const formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(date);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <div className="profile-info">
      <div className="profile-info-left">
        <img id="profile-photo" src={avatar_url || "../Images/profile-photo-icon.svg"} alt="Profile" />
      </div>
      <div className="profile-info-right">
        <h2>{name || 'No name available'}</h2>
        <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">@{login}</a>
        <p>{bio || 'No bio available'}</p>
        <div className="profile-stats">
          <div className="stat">
            <p>Repos</p>
            <p>{public_repos}</p>
          </div>
          <div className="stat">
            <p>Following</p>
            <p>{following}</p>
          </div>
          <div className="stat">
            <p>Followers</p>
            <p>{followers}</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-detail">
            <img src={Location} alt="Location" />
            <p>Location: {location || 'Not provided'}</p>
          </div>
          <div className="profile-detail">
            <img src={Email} alt="Email" />
            <p>Email: {email || 'Not provided'}</p>
          </div>
          <div className="profile-detail">
            <img src={Twitter} alt="Twitter" />
            <p>Twitter: {twitter_username || 'Not available'}</p>
          </div>
          <div className="profile-detail">
            <img src={Organization} alt="Company" />
            <p>Company: {company || 'Not available'}</p>
          </div>
          <p>Joined: {formatDate(created_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
