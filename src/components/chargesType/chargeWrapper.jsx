import React from "react";
import { NavLink } from "react-router-dom";
import { VirtualCardTab } from "./virtualCardTab";
import {
  getToken,
  getBillPayment,
  getElectricityCharges,
  getGeneralTransactionFee,
  getGiftCardCharges,
  getPhysicalCharges,
  getVirtualCardCharges,
} from "../../api/dashboard-api";

export default function ChargesTypeWrapper() {
  const dormantNavLink = "block text-center p-4";
  let activeClassName =
    "bg-gray400 w-full h-full p-3 text-center block border-b-4 rounded-md";
  return (
    <>
      <div>
        <nav className="mb-2">
          <ul className="w-full flex justify-between text-primary">
            <li className="w-full bg-gray500 mr-2 rounded-md text-center hover:bg-gray400">
              <NavLink
                to="virtualcardtab"
                className={({ isActive }) =>
                  isActive ? activeClassName : dormantNavLink
                }>
                Virtual Card Charges
              </NavLink>
            </li>
            <li className="w-full bg-gray500 mr-2 rounded-md text-center  hover:bg-gray400">
              <NavLink
                to="physicalchargestab"
                className={({ isActive }) =>
                  isActive ? activeClassName : dormantNavLink
                }>
                Physical Charges
              </NavLink>
            </li>
            <li className="w-full bg-gray500 mr-2 rounded-md text-center  hover:bg-gray400">
              <NavLink
                to="billpaymenttab"
                className={({ isActive }) =>
                  isActive ? activeClassName : dormantNavLink
                }>
                Bill Payment
              </NavLink>
            </li>
            <li className="w-full bg-gray500 mr-2 rounded-md text-center  hover:bg-gray400">
              <NavLink
                to="electricitychargestab"
                className={({ isActive }) =>
                  isActive ? activeClassName : dormantNavLink
                }>
                Electricity Charges
              </NavLink>
            </li>
            <li className="w-full bg-gray500 mr-2 rounded-md text-center  hover:bg-gray400">
              <NavLink
                to="giftcardchargestab"
                className={({ isActive }) =>
                  isActive ? activeClassName : dormantNavLink
                }>
                Gift Card Charges
              </NavLink>
            </li>
            <li className="w-full bg-gray500 rounded-md text-center  hover:bg-gray400">
              <NavLink
                to="generaltransactiontab"
                className={({ isActive }) =>
                  isActive ? activeClassName : dormantNavLink
                }>
                General Transaction Fee
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
