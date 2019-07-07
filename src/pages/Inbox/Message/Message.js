import React from "react";

export default function Message({ params }) {
  return (
    <div>
      <h2>title-Message</h2>
      <p>id:{params.id}</p>
    </div>
  );
}
