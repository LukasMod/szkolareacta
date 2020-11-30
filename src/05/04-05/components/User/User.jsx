import React from 'react';

import './User.scss';

const User = ({ users, userId, isUserClicked }) => {
  const userShow = users.find((item) => item.login.uuid === userId);

  return isUserClicked ? (
    <div className="user">
      <img className="user__image" src={userShow.picture.large} alt="" />
      <div className="user__info">
        <div className="user__name">Name: {userShow.name.first}</div>
        <div className="user__surname">Surname: {userShow.name.last}</div>
        <div className="user__phone">Phone: {userShow.phone}</div>
      </div>
    </div>
  ) : (
    <div className="user">
      <div className="user__noUser">Pick User</div>
    </div>
  );
};

export default User;
