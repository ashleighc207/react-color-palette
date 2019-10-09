import React, { Component } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
import PaletteBox from "./PaletteBox.js";

function PaletteForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [currentColor, setColor] = React.useState("#32607C");
  const [colors, setNewColor] = React.useState([]);
  let luminance = chroma(currentColor).luminance();
  let textColor;
  luminance < 0.15
    ? (textColor = classes.lightText)
    : (textColor = classes.darkText);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function updateCurrentColor(newColor) {
    setColor(newColor.hex);
  }

  function addNewColor() {
    setNewColor(oldColors => [...oldColors, currentColor]);
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
          <Typography variant="h6" noWrap></Typography>
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
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={updateCurrentColor}
            className={classes.chromePicker}
            width="90%"
          />
          <Button
            className={[classes.addButton, textColor].join(" ")}
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColor }}
            onClick={addNewColor}
          >
            Add Color
          </Button>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.mainContainer}>
          {colors.length > 0 &&
            colors.map(color => (
              <PaletteBox
                color={color}
                classes={classes}
                textColor={textColor}
              />
            ))}
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
