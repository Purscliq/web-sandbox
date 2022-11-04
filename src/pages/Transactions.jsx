import React from "react";
import SelectTransactions from "../components/main/SelectTransactions";
import { tableStyles } from "../assets/styles/globalStyles";

export default function Transactions() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h4 className="text-lightBlack font-semibold text-[24px]">
            Transactions
          </h4>
          <SelectTransactions />
        </div>

        <div className="shadow border-b border-gray-200 sm:rounded-lg">
          <table className={`${tableStyles.mainTable}  `}>
            <thead>
              <tr className={`${tableStyles.tableRow}`}>
                <th scope="col" className={`${tableStyles.tableHead}`}>
                  DATE
                </th>
                <th scope="col" className={`${tableStyles.tableHead}`}>
                  NAME
                </th>
                <th scope="col" className={`${tableStyles.tableHead}`}>
                  STATUS
                </th>
                <th scope="col" className={`${tableStyles.tableHead}`}>
                  AMOUNT
                </th>
                <th scope="col" className={`${tableStyles.tableHead}`}>
                  CURRENT BALANCE
                </th>
                <th scope="col" className={`${tableStyles.tableHead}`}>
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-300 divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Micheal
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Jones</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        1234567890
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      MichealJones@examples.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      12/08/2022
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#!"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
