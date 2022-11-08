import Logo from "../../assets/images/purseblue.png";
import { IoMdNotifications } from "react-icons/io";

export default function ChargesTopBar(props) {
  return (
    <div>
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white text-primary shadow">
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white">
              <img className="h-8 w-auto" src={Logo} alt="Workflow" />
            </div>
                      <p>{ props.pageName}</p>
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
