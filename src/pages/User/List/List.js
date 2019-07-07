import React from "react";
import { NavLink } from "react-router-dom";

export default function List({ history }) {
  const userList = [
    {
      id: 1,
      name: "张三"
    },
    {
      id: 2,
      name: "李四"
    },
    {
      id: 3,
      name: "王五"
    }
  ];

  return (
    <div className="UserList">
      <h2>title-user-list</h2>
      <ul>
        {userList &&
          userList.map(user => (
            <li key={user.id}>
              <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
