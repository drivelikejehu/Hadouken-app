import React from "react";

const Combo = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.comboName}</td>
      <td>{props.comboString}</td>
    </tr>
  );
};

export default Combo;
