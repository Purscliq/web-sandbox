import React from "react";
import { NavLink } from "react-router-dom";
export default function ChargesTypeWrapper() {
  return (
    <nav>
      <ul className="w-full flex justify-between text-primary">
        <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
          <NavLink to="virtualcardtab">Virtual Card Charges</NavLink>
        </li>
        <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
          <NavLink to="physicalchargestab">Physical Charges</NavLink>
        </li>
        <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
          <NavLink to="billpaymenttab">Bill Payment</NavLink>
        </li>
        <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
          <NavLink to="electricitychargestab">Electricity Charges</NavLink>
        </li>
        <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
          <NavLink to="giftcardchargestab">Gift Card Charges</NavLink>
        </li>
        <li className="w-3/4 bg-gray500 mr-2 p-2 rounded-md text-center">
          <NavLink to="generaltransactiontab">General Transaction Fee</NavLink>
        </li>
      </ul>
    </nav>
  );
}
