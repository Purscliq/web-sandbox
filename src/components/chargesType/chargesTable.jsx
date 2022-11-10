import React from "react";
import ChargesTableContent from "./chargesTableContent";
export default function ChargesTable({ tableData }) {
  // let chargesTableRow = [...props.tableContent];
  // let tableRow = chargesTableRow.map((row, rowIndex) => {
  //   return <ChargesTableContent key={rowIndex} content={row} />;
  // });

  return (
    <div>
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
          {
            tableData?.map((data, dataIndex) => (
              // <tr key={i}>
              //   <td>{data.email}</td>
              // </tr>
              <ChargesTableContent key={dataIndex} content={data} />

            ))
          }
        </tbody>
      </table>
    </div>
  );
}
