import React, { useState } from "react";
import Logo from "../../assets/images/purseblue.png";
import { IoMdNotifications } from "react-icons/io";

export default function ChargesTopBar(props) {
  const [pageName] = useState("charges")
  return (
    <div>
      <div className="w-screen flex-shrink-0 flex h-16 bg-blackPearl shadow fixed top-0 left-0 z-10">
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex">
            <div className="flex items-center h-16 flex-shrink-0 px-4">
              <img className="h-8 w-auto" src={Logo} alt="Workflow" />
            </div>
            <p className="text-primary text-2xl mx-7 my-4">{pageName}</p>
          </div>

          <div className="ml-4 flex items-center md:ml-6">
            <div>
              <IoMdNotifications className="cursor-pointer h-7 w-7 p-1 bg-gray-200 rounded-full text-gray-900 hover:text-gray-500" />
            </div>

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu-button">
                  <img
                    className="h-9 w-9 rounded-full"
                    src="https://joeschmoe.io/api/v1/random"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
