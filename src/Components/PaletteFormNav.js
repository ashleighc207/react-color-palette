import React, { Component } from "react";
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
import PaletteBoxList from "./PaletteBoxList.js";
import { arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return this.props.palettes.length > 0
        ? this.props.palettes.every(palette => {
            return palette.paletteName !== value;
          })
        : true;
    });
  }
  render() {
    const {
      open,
      handleSubmit,
      handleDrawerOpen,
      colors,
      newPaletteName,
      addPaletteName,
      classes
    } = this.props;
    return (
      <div>
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
                <Button color="primary">Cancel</Button>
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
      </div>
    );
  }
}
export default PaletteFormNav;
