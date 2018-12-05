import React from "react";

function Output(props) {
  return (
    <div>
      <ul>
        <li>
          Coffee:
          {props.coffee}
        </li>
        <li>
          Email:
          {props.email}
        </li>
        <li>
          Flavor:
          {props.flavor}
        </li>
        <li>
          Size:
          {props.size}
        </li>
        <li>
          Strength:
          {props.strength}
        </li>
      </ul>
    </div>
  );
}

export default Output;
