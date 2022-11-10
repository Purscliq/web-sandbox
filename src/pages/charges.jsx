import React, { useState } from "react";
import ChargesTypeWrapper from "../components/chargesType/chargeWrapper";
import ChargesTopBar from "../components/chargesType/chargesTopBar";
import { Sidebar } from "../components";
import {Outlet} from "react-router-dom"

export const Charges = () => {
  const [chargesType] = useState(
    [
      { type: "Virtual Card Charges", id: 1, name: "virtualcard" },
      { type: "Physical Charges", id: 2, name: "physicalcharges" },
      { type: "Bill Payment", id: 3, name: "billpayment" },
      { type: "Electricity Charges", id: 4, name: "electricitycharges" },
      { type: "Gift Card Charges", id: 5, name: "giftcards" },
      { type: "General Transaction Fee", id: 6, name: "generaltransaction" },
    ]
  )
    return (
      <div className="w-full h-screen bg-gray600">
        <ChargesTopBar />
        <Sidebar />
        <section className="w-10/12 mx-auto mt-16 bg-gray600 relative">
          <div className="mb-4">
            <ChargesTypeWrapper charges={chargesType} />
          </div>
          <Outlet/>
        </section>
      </div>
    );
  }
