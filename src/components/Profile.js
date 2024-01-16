import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="followers">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="views">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="likes">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
