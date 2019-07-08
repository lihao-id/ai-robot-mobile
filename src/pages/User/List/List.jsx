import React from "react";
import { NavLink } from "react-router-dom";
import { addCount, subtractCount } from "store/user-list/action";
import { connect } from "react-redux";
import styled from "styled-components";
// import "./css/list.scss";

function List({ count, addCount, subtractCount }) {
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

  const TitleH2 = styled.h2`
    color: green;
  `;

  return (
    <div className="user-list">
      <TitleH2>title-user-list</TitleH2>
      <ul>
        {userList &&
          userList.map(user => (
            <li key={user.id}>
              <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
            </li>
          ))}
      </ul>
      <div className="count">{count.value}</div>
      <button className="subtract" onClick={subtractCount}>
        -
      </button>
      <button className="add" onClick={addCount}>
        +
      </button>
    </div>
  );
}

export default connect(
  state => ({
    count: state.count
  }),
  {
    addCount,
    subtractCount
  }
)(List);
