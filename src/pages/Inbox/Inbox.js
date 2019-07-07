import React from "react";

export default function Inbox({ children }) {
  return (
    <div>
      <h2>title-Inbox</h2>
      <p>{children || "welcom to inbox"}</p>
    </div>
  );
}
