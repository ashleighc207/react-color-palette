import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Modal } from "../";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      newPalette: {},
      step: 0
    };
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.handleSubmitNext = this.handleSubmitNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onCloseModal() {
    this.setState({ step: 0 });
  }

  onOpenModal() {
    this.setState({ step: 1 });
  }

  handleSubmitNext() {
    const newPalette = {
      paletteName: this.props.newPaletteName,
      id: this.props.newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.props.colors
    };
    this.setState({ newPalette });
    this.setState({ step: 2 });
  }

  handleSubmit(emojiNative) {
    let updatedPalette = { ...this.state.newPalette };
    updatedPalette.emoji = emojiNative;
    this.setState(
      {
        newPalette: updatedPalette,
        step: 0
      },
      () => {
        this.props.handleSubmit(this.state.newPalette);
      }
    );
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
          color="inherit"
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

            <Link to="/" className={classes.cancelButton}>
              <Button color="primary">Cancel</Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
              onClick={this.onOpenModal}
              disabled={colors.length === 0}
            >
              Save Palette
            </Button>
          </Toolbar>
          <Modal
            handleSubmit={handleSubmit}
            addPaletteName={addPaletteName}
            newPaletteName={newPaletteName}
            open={this.state.step}
            onClose={this.onCloseModal}
            palettes={this.props.palettes}
            handleSubmitNext={this.handleSubmitNext}
            step={this.state.step}
            handleFinalizePalette={this.handleSubmit}
          />
        </AppBar>
      </div>
    );
  }
}
export default PaletteFormNav;
