import React, { useEffect } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import chroma from "chroma-js";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../Styles/PaletteFormStyles.js";
import PaletteBoxList from "./PaletteBoxList.js";
import { arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    ValidatorForm.addValidationRule("isUnique", value => {
      return colors.length > 0
        ? colors.every(color => {
            return value.toLowerCase() !== color.name.toLowerCase();
          })
        : true;
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return colors.length > 0
        ? colors.every(color => {
            return color.color !== currentColor;
          })
        : true;
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return props.palettes.length > 0
        ? props.palettes.every(palette => {
            return palette.paletteName !== value;
          })
        : true;
    });
  }, [colors, currentColor, props.palettes]);

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
    console.log(colorName);
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

  function handleSubmit() {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors
    };
    props.savePalette(newPalette);
    props.history.push("/");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              onChange={addPaletteName}
              value={newPaletteName}
              label="Palette Name"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Palette name is required",
                "Palette name must be unique"
              ]}
            />
            <Link to="/" className={classes.cancelButton}>
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
              type="submit"
              disabled={colors.length === 0}
            >
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
        <div className={classes.drawerContents}>
          <Typography variant="h4" className={classes.heading}>
            Design Your Palette
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearPalette}
            >
              Clear Palette
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={updateCurrentColor}
            className={classes.chromePicker}
            width="90%"
          />
          <ValidatorForm
            className={classes.form}
            onSubmit={addNewColor}
            instantValidate={false}
          >
            <TextValidator
              label="Color Name"
              onChange={addName}
              className={classes.textInput}
              id="colorName"
              validators={["required", "isColorUnique", "isUnique"]}
              errorMessages={[
                "Color name is required",
                "Color must be unique",
                "Color name must be unique"
              ]}
              variant="outlined"
              value={newColorName}
            />
            <Button
              className={[classes.addButton, textColor].join(" ")}
              variant="contained"
              color="primary"
              style={{
                backgroundColor: colors.length === 20 ? "#C4C4C4" : currentColor
              }}
              type="submit"
              disabled={colors.length === 20}
            >
              {colors.length === 20 ? "Palette is Full" : "Add Color"}
            </Button>
          </ValidatorForm>
        </div>
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
