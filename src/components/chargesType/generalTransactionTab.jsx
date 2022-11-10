import React, {useState} from "react";
import ChargesTable from "./chargesTable";

export const GeneralTransactionTab = () => {
    const [tableData] = useState([
      {
        id: 16,
        email: "usermail@gmail.com",
        phone: +2341645454545,
        creationFee: 160,
        transactFee: 16160,
        monthlyFee: 16161600,
        purchaseFee: 1600,
      },
      {
        id: 17,
        email: "usermail@gmail.com",
        phone: +2341745454545,
        creationFee: 170,
        transactFee: 17170,
        monthlyFee: 17171700,
        purchaseFee: 1700,
      },
      {
        id: 18,
        email: "usermail@gmail.com",
        phone: +2341845454545,
        creationFee: 180,
        transactFee: 18180,
        monthlyFee: 18181800,
        purchaseFee: 1800,
      },
    ]);
    return (
      <>
        <ChargesTable tableData={tableData}/>
      </>
    );
};
