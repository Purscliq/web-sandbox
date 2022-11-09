import React from "react";
import Charge from "./charge";
import { useLocation } from "react-router-dom";

export default function ChargesTypeWrapper(props) {
  let charges = [...props.charges];
  let { pathname } = useLocation();
  const setUrl = reqName => {
    return `${pathname}/../${reqName}`;
  };
  let unit_charge = charges.map(charge => {
    return <Charge
      key={charge.id}
      type={charge.type}
      setPath={setUrl}
      name={charge.name}
    />;
  });
  return (
    <nav>
      <ul className="w-full flex justify-between text-primary">
        {unit_charge}
      </ul>
    </nav>
  );
}
