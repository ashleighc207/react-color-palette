import React, { useEffect } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../Styles/ModalStyles.js";
import Button from "@material-ui/core/Button";
import classes from "../Styles/ModalStyles.js";

function EmojiModal(props) {
  const classes = useStyles();
  const { onClose, open, finalizePalette } = props;
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    onClose();
    finalizePalette();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.dialog}
    >
      <DialogTitle id="simple-dialog-title">Save New Palette</DialogTitle>

      <Button
        variant="contained"
        color="primary"
        className={classes.nextButton}
        onClick={handleSubmit}
      >
        Save Palette
      </Button>
    </Dialog>
  );
}

export default EmojiModal;
