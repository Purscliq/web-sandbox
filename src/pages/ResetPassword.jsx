import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Logo from "../assets/images/purseblue.png";

export default function ResetPassword() {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div className=" mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <h5 className="mt-2 text-center text-1xl text-gray-700">
                A generated password has been sent to your email
              </h5>

              <h5 className="mt-2 text-center text-1xl text-gray-600">
                Follow the instructions and login in to your account
              </h5>
            </div>

            <div>
              <div
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:no-reply@example.com";
                  e.preventDefault();
                }}
              >
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go to email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className="cursor-pointer text-gray-700 mt-6 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <ArrowLeftOutlined className="sm:mx-auto sm:w-full sm:max-w-md" />
        <h2 className="mt-1 text-center text-1xl">Go back</h2>
      </div>
    </div>
  );
}
