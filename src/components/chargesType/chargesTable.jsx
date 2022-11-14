import React, { useState, useEffect } from "react";
import ChargesTableContent from "./chargesTableContent";
export default function ChargesTable({ tableData }) {

  return (
    <div className="">
      <table className="w-full bg-tableBg">
        <thead className="text-left p-4">
          <tr className=" text-primary">
            <th scope="col" className="py-3 px-6">
              CLIQ ID
            </th>
            <th scope="col" className="py-3 px-1">
              EMAIL
            </th>
            <th scope="col" className="py-3 px-1">
              PHONE
            </th>
            <th scope="col" className="py-3 px-1">
              CREATION FEES
            </th>
            <th scope="col" className="py-3 px-1">
              TRANSACTION FEES
            </th>
            <th scope="col" className="py-3 px-1">
              MONTHLY FEES
            </th>
            <th scope="col" className="py-3 px-1">
              PURCHASE FEES
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-300 divide-y divide-gray-200">
          {tableData?.map((data, dataIndex) => (
            <ChargesTableContent key={dataIndex} content={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
