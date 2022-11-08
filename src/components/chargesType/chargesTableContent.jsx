import React from "react";
import TableData from "./tableData";
export default function ChargesTableContent(props) {
  let tableContent = { ...props.content };

  return (
    <tr className=" bg-gray400 py-2 mb-40 text-primary">
      <TableData data={tableContent.id} />
      <TableData data={tableContent.email} />
      <TableData data={tableContent.phone} />
      <TableData data={tableContent.creationFee} />
      <TableData data={tableContent.transactFee} />
      <TableData data={tableContent.monthlyFee} />
      <TableData data={tableContent.purchaseFee} />
    </tr>
  );
}
