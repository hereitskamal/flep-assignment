import React from 'react';

const UserCard = ({ user }) => {
  if (!user) {
    return null; 
  }
  return (
      <a href={user.link} target="_blank" rel="noopener noreferrer">
         <div className="user-card" style={{display:"flex"}}>
            <img src={user.picture} alt={`${user.name}'s profile picture`} className="user-picture" />
            <div>
              <h3 className="user-name">{user.name}</h3>
              <p className="user-position">{user.position}</p>
            </div>
          </div>
      </a> 
  );
};

export default UserCard;
