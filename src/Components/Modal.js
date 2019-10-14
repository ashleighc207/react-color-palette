import React, { useEffect } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../Styles/ModalStyles.js";
import Button from "@material-ui/core/Button";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function Modal(props) {
  const classes = useStyles();
  const { onClose, step, handleSubmitNext, handleFinalizePalette } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    handleFinalizePalette();
    console.log("test");
    onClose();
  };

  const handleClick = () => {
    handleSubmitNext();
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return props.palettes.length > 0
        ? props.palettes.every(palette => {
            return palette.paletteName !== value;
          })
        : true;
    });
  }, [props.palettes]);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={step === 2}
        className={classes.dialog}
      >
        <Picker set="apple" />
        <Button
          variant="contained"
          color="primary"
          className={classes.nextButton}
          onClick={handleSubmit}
        >
          Save Palette
        </Button>
      </Dialog>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={step === 1}
        className={classes.dialog}
      >
        <DialogTitle id="simple-dialog-title">Save New Palette</DialogTitle>

        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            onChange={props.addPaletteName}
            value={props.newPaletteName}
            variant="outlined"
            label="Palette Name"
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={[
              "Palette name is required",
              "Palette name must be unique"
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.nextButton}
            onClick={handleClick}
          >
            Next
          </Button>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default Modal;
