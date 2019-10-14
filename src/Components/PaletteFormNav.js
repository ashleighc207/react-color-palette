import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

class PaletteFormNav extends Component {
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
          color="transparent"
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
            </ValidatorForm>
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default PaletteFormNav;
