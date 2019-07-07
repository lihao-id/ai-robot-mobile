import React from "react";

export default function Info({ match }) {
  return (
    <div className="UserInfo">
      <h2>title-user-info</h2>
      <p>id:{match.params.id}</p>
    </div>
  );
}
