import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import PaletteBox from "./PaletteBox.js";

const PaletteBoxList = SortableContainer(props => {
  return (
    <div className={props.classes.mainContainer}>
      {props.colors.map((color, i) => (
        <PaletteBox
          color={color.color}
          classes={props.classes}
          textColor={props.textColor}
          key={color.name}
          name={color.name}
          delete={() => props.deleteColor(color.name)}
          index={i}
        />
      ))}
    </div>
  );
});

export default PaletteBoxList;
