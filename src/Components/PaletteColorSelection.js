import React, { Component } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
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

class PaletteColorSelection extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule("isUnique", value => {
      return this.props.colors.length > 0
        ? this.props.colors.every(color => {
            return value.toLowerCase() !== color.name.toLowerCase();
          })
        : true;
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return this.props.colors.length > 0
        ? this.props.colors.every(color => {
            return color.color !== this.props.currentColor;
          })
        : true;
    });
  }
  render() {
    const {
      classes,
      clearPalette,
      currentColor,
      updateCurrentColor,
      addNewColor,
      addName,
      textColor,
      colors,
      newColorName
    } = this.props;
    return (
      <div className={classes.drawerContents}>
        <Typography variant="h4" className={classes.heading}>
          Design Your Palette
        </Typography>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="secondary" onClick={clearPalette}>
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
    );
  }
}
export default PaletteColorSelection;
