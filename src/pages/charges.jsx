import React, { Component } from "react";
import ChargesTypeWrapper from "../components/chargesType/chargeWrapper";
import ChargesTopBar from "../components/chargesType/chargesTopBar";
import { Sidebar } from "../components";
import {Outlet} from "react-router-dom"

export class Charges extends Component {
  state = {
    pageName: "Charges",
    chargesType: [
      { type: "Virtual Card Charges", id: 1, name: "virtualcard" },
      { type: "Physical Charges", id: 2, name: "physicalcharges" },
      { type: "Bill Payment", id: 3, name: "billpayment" },
      { type: "Electricity Charges", id: 4, name: "electricitycharges" },
      { type: "Gift Card Charges", id: 5, name: "giftcards" },
      { type: "General Transaction Fee", id: 6, name: "generaltransaction" },
    ],
    virtualCardCharges: [
      
    ],
    physicalCharges: [
      
    ],
    billPayment: [
      
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
      
    ],
    generalTransactionFee: [
      
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
          <Outlet/>
        </section>
      </div>
    );
  }
}
