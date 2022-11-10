import React, {useState} from "react";
import ChargesTable from "./chargesTable";

export const VirtualCardTab = () => {
    const [tableData] = useState([
      {
        id: 1,
        email: "usermail@gmail.com",
        phone: +234145454545,
        creationFee: 10,
        transactFee: 110,
        monthlyFee: 11100,
        purchaseFee: 100,
      },
      {
        id: 2,
        email: "usermail@gmail.com",
        phone: +234245454545,
        creationFee: 20,
        transactFee: 220,
        monthlyFee: 22200,
        purchaseFee: 200,
      },
      {
        id: 3,
        email: "usermail@gmail.com",
        phone: +234345454545,
        creationFee: 30,
        transactFee: 330,
        monthlyFee: 33300,
        purchaseFee: 300,
      },
    ]);
    return (
      <>
        <ChargesTable tableData={tableData}/>
      </>
    );
};
