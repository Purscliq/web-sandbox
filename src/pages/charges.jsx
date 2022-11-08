import React, { Component } from "react";
import ChargesTypeWrapper from "../components/chargesType/chargeWrapper";
import ChargesTopBar from "../components/chargesType/chargesTopBar";
import ChargesTable from "../components/chargesType/chargesTable";
import { Sidebar } from "../components";

export class Charges extends Component {
  state = {
    pageName: "Charges",
    chargesType: [
      { type: "Virtual Card Charges", id: 1 },
      { type: "Physical Charges", id: 2 },
      { type: "Bill Payment", id: 3 },
      { type: "Electricity Charges", id: 4 },
      { type: "Gift Card Charges", id: 5 },
      { type: "General Transaction Fee", id: 6 },
    ],
    virtualCardCharges: [
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
    ],
    physicalCharges: [
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
    ],
    billPayment: [
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
    ],
    electricityCharges: [
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
    ],
    giftCards: [
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
    ],
    generalTransactionFee: [
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
    ],
  };
  render() {
    return (
      <div className="w-full h-screen bg-gray600">
        <ChargesTopBar pageName={this.state.pageName} />
        <Sidebar />
        <section className="w-10/12 mx-auto mt-16 bg-gray600 relative">
          <div className="mb-4">
            <ChargesTypeWrapper charges={this.state.chargesType} />
          </div>
          <ChargesTable tableContent={this.state.virtualCardCharges} />
        </section>
      </div>
    );
  }
}
