import React, { useState } from "react";
import ChargesTable from "./chargesTable";

export const ElectricityChargesTab = () => {
  const [tableData] = useState([
    {
      id: 10,
      email: "usermail@gmail.com",
      phone: +2341045454545,
      creationFee: 100,
      transactFee: 10100,
      monthlyFee: 10101000,
      purchaseFee: 1000,
    },
    {
      id: 11,
      email: "usermail@gmail.com",
      phone: +2341145454545,
      creationFee: 110,
      transactFee: 11110,
      monthlyFee: 11111100,
      purchaseFee: 1100,
    },
    {
      id: 12,
      email: "usermail@gmail.com",
      phone: +2341245454545,
      creationFee: 120,
      transactFee: 12120,
      monthlyFee: 12121200,
      purchaseFee: 1200,
    },
  ]);
  return (
    <>
      <ChargesTable tableData={tableData} />
    </>
  );
};
