import React, { useState } from 'react';

const UserCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(user.followers);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowersCount(prevCount => prevCount - 1);
    } else {
      setFollowersCount(prevCount => prevCount + 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt="User Avatar" />
      <h3>{user.username}</h3>
      <p>Followers: {followersCount.toLocaleString()}</p>
      <button
        onClick={handleFollowClick}
        style={{ backgroundColor: isFollowing ? 'green' : 'blue' }}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
