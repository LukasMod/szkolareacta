import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import User from './../User/User';

const USER_NUMBER = 10;

const UserList = ({ getUser }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${USER_NUMBER}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
        // setTimeout(() => {
        //   setLoading(false);
        //   console.log('2s lag');
        // }, 2000);
      })
      .catch((error) => console.log(error));
  }, []);

  const skeletonList = [];
  for (let i = 0; i < USER_NUMBER; i++) {
    skeletonList.push(
      <Skeleton
        variant="rect"
        animation="wave"
        width={404}
        height={160}
        style={{ margin: '10px auto' }}
        key={i}
      />
    );
  }

  return (
    <div className="userList">
      {isLoading
        ? skeletonList
        : users.map((user) => (
            <User
              key={user.login.uuid}
              user={user}
              getClickedUser={getUser}
              className="userCard"
            />
          ))}
    </div>
  );
};

export default UserList;
