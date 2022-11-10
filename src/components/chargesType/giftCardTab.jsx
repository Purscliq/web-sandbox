import React, {useState} from "react";
import ChargesTable from "./chargesTable";

export const GiftCardTab = () => {
    const [tableData] = useState([
      {
        id: 13,
        email: "usermail@gmail.com",
        phone: +2341345454545,
        creationFee: 130,
        transactFee: 13130,
        monthlyFee: 13131300,
        purchaseFee: 1300,
      },
      {
        id: 14,
        email: "usermail@gmail.com",
        phone: +2341445454545,
        creationFee: 140,
        transactFee: 14140,
        monthlyFee: 14141400,
        purchaseFee: 1400,
      },
      {
        id: 15,
        email: "usermail@gmail.com",
        phone: +2341545454545,
        creationFee: 150,
        transactFee: 15150,
        monthlyFee: 15151500,
        purchaseFee: 1500,
      },
    ]);
    return (
      <>
        <ChargesTable tableData={tableData} />
      </>
    );
};
