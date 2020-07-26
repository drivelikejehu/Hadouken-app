import React from "react";
import Combo from "./Combo";

const ComboList = (props) => {
  return (
    <tbody>
      {props.combosToRender.map((comboRenders) => (
        <Combo
          {...comboRenders}
          key={comboRenders.id}
          id={comboRenders.id}
          comboName={comboRenders.comboName}
          comboString={comboRenders.comboString}
        />
      ))}
    </tbody>
  );
};

export default ComboList;
