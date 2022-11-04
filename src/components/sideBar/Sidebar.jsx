import {
  MdAccountBalanceWallet,
  MdAdminPanelSettings,
  MdDashboard,
  MdEvent,
  MdNotificationsActive,
  MdPayments,
} from "react-icons/md";
import { BsBank, BsCreditCardFill, BsPercent } from "react-icons/bs";
import { FaTasks, FaUsers } from "react-icons/fa";
import { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { TbListDetails } from "react-icons/tb";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div
        className="flex flex-col overflow-y-auto shadow-lg bg-primary w-full"
        style={{
          height: "93vh",
          width: isOpen ? "350px" : "70px",
          transition: "all 0.3s",
        }}
      >
        <div className=" flex flex-1 " style={{}}>
          <div className="flex-1 overflow-y-auto">
            <nav className="relative flex-1 flex flex-col p-6 gap-4">
              <div
                onClick={toggle}
                className="cursor-pointer mb-4"
                style={{
                  marginLeft: isOpen ? "90%" : "0",
                  transition: "all 0.3s",
                }}
              >
                {isOpen ? (
                  <IoMdArrowDropleftCircle className="h-5 w-5" />
                ) : (
                  <IoMdArrowDroprightCircle className="h-5 w-5" />
                )}
              </div>
              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md"
              >
                <MdDashboard className=" h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Dashboard
                </span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <MdAccountBalanceWallet className=" h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Account
                </span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <BsCreditCardFill className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>Card</span>
              </a>

              <a
                href="/dashboard/users"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <FaUsers className=" h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>Users</span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <MdAdminPanelSettings className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>Admin</span>
              </a>
              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <TbListDetails className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>KYCs</span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
                style={{ display: isOpen ? "flex" : "none" }}
              >
                <MdPayments className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Withdrawal
                </span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <BsBank className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>Loans</span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <FaTasks className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Roles & Permissions
                </span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <BsPercent className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Charges
                </span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <MdEvent className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Events
                </span>
              </a>

              <a
                href="/dashboard"
                className="text-lightBlack hover:text-secondary group gap-3 flex items-center text-sm font-semibold rounded-md "
              >
                <MdNotificationsActive className="h-6 w-6" />
                <span style={{ display: isOpen ? "flex" : "none" }}>
                  Notifications
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
