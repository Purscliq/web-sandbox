import React from "react";
import PropTypes from 'prop-types';
import TableData from "./tableData";
 function ChargesTableContent(props) {
  let tableContent = { ...props.content };

  return (
    <tr className=" bg-gray400 py-2 mb-40 text-primary">
      <TableData data={tableContent.id} />
      <TableData data={tableContent.email} />
      <TableData data={tableContent.phone} />
      <TableData data={tableContent.creationFee} />
      <TableData data={tableContent.transactFee} />
      <TableData data={tableContent.monthlyFee} />
      <TableData data={tableContent.purchaseFee} />
    </tr>
  );
}

/*props validation commence*/
ChargesTableContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    creationFee: PropTypes.number.isRequired,
    transactFee: PropTypes.number.isRequired,
    monthlyFee: PropTypes.number.isRequired,
    purchaseFee: PropTypes.number.isRequired,
  }),
};

export default ChargesTableContent;
