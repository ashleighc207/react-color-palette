import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import chroma from "chroma-js";
import useStyles from "../Styles/PaletteFormStyles.js";
import PaletteBoxList from "./PaletteBoxList.js";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav.js";
import PaletteColorSelection from "./PaletteColorSelection.js";

function PaletteForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [currentColor, setColor] = React.useState("#32607C");
  const [colors, setNewColor] = React.useState([]);
  const [newColorName, setnewColorName] = React.useState("");
  const [newPaletteName, setNewPaletteName] = React.useState("");
  let luminance = chroma(currentColor).luminance();
  let textColor;
  luminance < 0.15
    ? (textColor = classes.lightText)
    : (textColor = classes.darkText);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function onSortEnd({ oldIndex, newIndex }) {
    setNewColor(colors => arrayMove(colors, oldIndex, newIndex));
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function updateCurrentColor(newColor) {
    setColor(newColor.hex);
  }

  function addNewColor() {
    const newColor = { name: newColorName, color: currentColor };
    setNewColor(oldColors => [...oldColors, newColor]);
    setnewColorName("");
    document.getElementById("colorName").value = "";
  }
  function deleteColor(colorName) {
    setNewColor(oldColors =>
      oldColors.filter(color => color.name !== colorName)
    );
  }
  function addName(e) {
    setnewColorName(e.target.value);
  }

  function clearPalette() {
    setNewColor([]);
  }

  function addPaletteName(e) {
    setNewPaletteName(e.target.value);
  }

  function handleSubmit(newPalette) {
    props.savePalette(newPalette);
    props.history.push("/");
  }

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
        colors={colors}
        newPaletteName={newPaletteName}
        addPaletteName={addPaletteName}
        classes={classes}
        palettes={props.palettes}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <PaletteColorSelection
          classes={classes}
          clearPalette={clearPalette}
          currentColor={currentColor}
          updateCurrentColor={updateCurrentColor}
          addNewColor={addNewColor}
          addName={addName}
          newColorName={newColorName}
          colors={colors}
          textColor={textColor}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.mainContainer}>
          {colors.length > 0 && (
            <PaletteBoxList
              colors={colors}
              classes={classes}
              textColor={textColor}
              deleteColor={() => deleteColor}
              axis="xy"
              onSortEnd={onSortEnd}
            />
          )}
          {colors.length === 0 && (
            <h1 className={classes.heading}>
              To get started, add colors using the color picker
            </h1>
          )}
        </div>
      </main>
    </div>
  );
}

export default PaletteForm;
