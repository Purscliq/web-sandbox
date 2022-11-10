import React, {useState} from "react";
import ChargesTable from "./chargesTable";

export const BillPaymentTab = () => {
  const [tableData] = useState([
    {
      id: 7,
      email: "usermail@gmail.com",
      phone: +234745454545,
      creationFee: 70,
      transactFee: 770,
      monthlyFee: 77700,
      purchaseFee: 700,
    },
    {
      id: 8,
      email: "usermail@gmail.com",
      phone: +234845454545,
      creationFee: 80,
      transactFee: 880,
      monthlyFee: 88800,
      purchaseFee: 800,
    },
    {
      id: 9,
      email: "usermail@gmail.com",
      phone: +234945454545,
      creationFee: 90,
      transactFee: 990,
      monthlyFee: 99900,
      purchaseFee: 900,
    },
  ]);
  return (
    <>
      <ChargesTable tableData={tableData}/>
    </>
  );
};
