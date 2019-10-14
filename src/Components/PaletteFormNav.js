import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Modal from "./Modal.js";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      emojiOpen: false
    };
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
  }

  onCloseModal() {
    this.setState({ modalOpen: false });
  }

  onOpenModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    const {
      open,
      handleSubmit,
      handleDrawerOpen,
      colors,
      newPaletteName,
      addPaletteName,
      classes,
      handleSubmitNext
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
            open={this.state.modalOpen}
            onClose={this.onCloseModal}
            palettes={this.props.palettes}
            handleSubmitNext={handleSubmitNext}
          />
        </AppBar>
      </div>
    );
  }
}
export default PaletteFormNav;
