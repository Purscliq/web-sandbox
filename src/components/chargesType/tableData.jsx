import React from "react";
export default function TableData(props) {
    return (
      <td>
            <div className="py-3 px-1">{ props.data}</div>
      </td>
    );
}
