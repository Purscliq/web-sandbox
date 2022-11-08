import React from "react";
import ChargesTableContent from "./chargesTableContent";
export default function ChargesTable(props) {
  let chargesTableRow = [...props.tableContent];
  let tableRow = chargesTableRow.map((row, rowIndex) => {
    return <ChargesTableContent key={rowIndex} content={row} />;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">CLIQ ID</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">CREATION FEES</th>
            <th scope="col">TRANSACTION FEES</th>
            <th scope="col">MONTHLY FEES</th>
            <th scope="col">PURCHASE FEES</th>
          </tr>
        </thead>
        <tbody className="bg-slate-300 divide-y divide-gray-200">
          {tableRow}
        </tbody>
      </table>
    </div>
  );
}
