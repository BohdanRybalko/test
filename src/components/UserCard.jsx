import React, { useState } from 'react';
import './UserCard.css';
import logo from '../cart-image/Logo.png'

const UserCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(user.followers);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowersCount((prevCount) => prevCount - 1);
    } else {
      setFollowersCount((prevCount) => prevCount + 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div className='gap-carts'>
      <div className="user-card">
      <div className='image_bag'>
      <div className='div-logo'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <div className="cart_img_div">
        <img className='cart_img' src={user.avatars} alt="User Avatar" />
        
        </div>
        </div>
      <div className="div_carts">
          <p>Tweets: {user.tweets}</p>
          <p>Followers: {followersCount.toLocaleString()}</p>
          </div>
          
      <div className='button'><button 
        onClick={handleFollowClick}
        className={isFollowing ? 'following-btn' : 'follow-btn'}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      </div>
      
      </div>
      </div>
  );
};

export default UserCard;
