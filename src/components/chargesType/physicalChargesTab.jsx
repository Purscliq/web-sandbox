import React, {useState} from "react";
import ChargesTable from "./chargesTable";

export const PhysicalChargesTab = () => {
    const [tableData] = useState([
      {
        id: 4,
        email: "usermail@gmail.com",
        phone: +234445454545,
        creationFee: 40,
        transactFee: 440,
        monthlyFee: 44400,
        purchaseFee: 400,
      },
      {
        id: 5,
        email: "usermail@gmail.com",
        phone: +234545454545,
        creationFee: 50,
        transactFee: 550,
        monthlyFee: 55500,
        purchaseFee: 500,
      },
      {
        id: 6,
        email: "usermail@gmail.com",
        phone: +234645454545,
        creationFee: 60,
        transactFee: 660,
        monthlyFee: 66600,
        purchaseFee: 600,
      },
    ]);
    return (<ChargesTable tableData={ tableData} />);
};
