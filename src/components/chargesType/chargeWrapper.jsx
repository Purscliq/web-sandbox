import React from "react";
import Charge from "./charge";

export default function ChargesTypeWrapper(props) {
  let charges = [...props.charges];
  let unit_charge = charges.map(charge => {
    return <Charge key={charge.id} type={charge.type} />;
  });
  return <ul>{unit_charge}</ul>;
}
