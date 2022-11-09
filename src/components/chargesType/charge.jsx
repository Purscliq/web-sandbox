import React from "react";
import { NavLink } from "react-router-dom";

export default function Charge(props) {
       const path = props.setPath(props.name);
  return (
    <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
      <NavLink to={`${path}`}>{props.type}</NavLink>
    </li>
  );
}
