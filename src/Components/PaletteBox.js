import React from "react";
import { SortableElement } from "react-sortable-hoc";

const PaletteBox = SortableElement(props => {
  const { classes, name, color, textColor } = props;
  console.log(props.delete);
  return (
    <div className={classes.newColorBox} style={{ backgroundColor: color }}>
      <p className={[classes.newColorBoxText, textColor].join(" ")}>{name}</p>
      <i
        className={`fas fa-trash-alt ${classes.newColorBoxIcon} ${textColor}`}
        onClick={props.delete}
      ></i>
    </div>
  );
});
export default PaletteBox;
