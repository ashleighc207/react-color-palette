import React, { useEffect } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../Styles/ModalStyles.js";
import Button from "@material-ui/core/Button";

function Modal(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    props.onClose();
    props.handleSubmitNext();
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
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
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
          type="submit"
        >
          Next
        </Button>
      </ValidatorForm>
    </Dialog>
  );
}

export default Modal;
