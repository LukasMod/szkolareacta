import React from 'react';

import './User.scss';

const User = () => {
  return (
    <div className="user">
      <img src="" alt="" className="user__image" />
      <div className="user__name">Name: Andrzej</div>
      <div className="user__surname">Surname: Kowalski</div>
      <div className="user__birthday">Date of birth: 10/11/1989</div>
      <div className="user__salary">Salary: 1000 $</div>
    </div>
  );
};

export default User;
