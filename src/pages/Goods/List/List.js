import React from "react";

import { NavLink } from "react-router-dom";

export default () => {
  const goodsList = [
    {
      id: 1,
      name: "小米"
    },
    {
      id: 2,
      name: "华为"
    },
    {
      id: 3,
      name: "vivo"
    }
  ];
  return (
    <div className="GoodsList">
      <h2>title-goods-list</h2>
      <ul>
        {goodsList &&
          goodsList.map(goods => (
            <li key={goods.id}>
              <NavLink to={`/goods/${goods.id}`}>{goods.name}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
