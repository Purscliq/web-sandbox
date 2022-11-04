import React from "react";
import { HiUserGroup, HiUser, HiUserRemove } from "react-icons/hi";
import { GiPayMoney } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { MdSavings } from "react-icons/md";
import Transactions from "../pages/Transactions";
import { containerStyle } from "../assets/styles/globalStyles";

export default function Main() {

  const dashboardItems = [
    {
      value: "10",
      title: "Total Users",
      icon: <HiUserGroup />,
    },
    {
      value: "10",
      title: "Active Users",
      icon: <HiUser />,
    },
    {
      value: "10",
      title: "Inactive Users",
      icon: <HiUserRemove />,
    },
    {
      value: "NGN 10",
      title: "Total Savings",
      icon: <MdSavings />,
    },
    {
      value: `NGN 10`,
      title: "Total Withdrawals",
      icon: <GiPayMoney />,
    },
    {
      value: `NGN 10`,
      title: "Total Transfer",
      icon: <GoGraph />,
    },
    {
      value: `NGN 10`,
      title: "Total Target Savings",
      icon: <GoGraph />,
    },
    {
      value: "NGN 900,000",
      title: "Total Flexi Savings",
      icon: <GoGraph />,
    },
    {
      value: `NGN 10`,
      title: "Total Loans",
      icon: <GoGraph />,
    },
  ];

  const walletItems = [
    {
      balance: `10`,
      title: "Current Balance",
    },
    {
      balance: `4500000`,
      title: "Total Earning",
    },
    {
      balance: `1500000`,
      title: "Total Expenditure",
    },
  ];

  return (
    <div className={`${containerStyle.mainContainer}`}>
      <div className="flex flex-col">
        <div className="flex gap-1  ">
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex w-9/12 gap-4 ">
            {/* Beginning of Dashboard items */}
            {dashboardItems.map((item, index) => (
              <div
                className="rounded-lg border bg-primary px-6 py-4 shadow-sm flex items-center"
                key={index}
              >
                <div className="flex-1 w-full">
                  <p className="text-[20px] text-gray-500 ">{item.title}</p>
                  <p className="text-[24px] font-semibold text-lightBlack">
                    {item.value}
                  </p>
                </div>

                <div className=" text-primary text-[30px] ">{item.icon}</div>
              </div>
            ))}

            {/* End of Dashboard items */}
          </div>

          <div className="ml-3">
            <div className="flex flex-col gap-1 ">
              <h4 className="text-[24px] text-lightDark font-semibold">
                Wallet
              </h4>
              <div className=" flex flex-3 flex-col w-[300px] h-[290px] gap-5 bg-primary p-3 rounded-lg shadow-sm border">
                {walletItems.map((item, index) => {
                  return (
                    <div className="flex flex-col p-2" key={index}>
                      <p className="text-[16px] text-lightBlack ">
                        {item.title}
                      </p>
                      <p className="text-[24px] font-medium text-secondary">
                        NGN {item.balance}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Transactions />
        </div>
      </div>
    </div>
  );
}
