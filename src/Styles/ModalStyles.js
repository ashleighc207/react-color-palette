import { makeStyles } from "@material-ui/core/styles";
const modalWidth = 350;

const useStyles = makeStyles(theme => ({
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      width: "30%",
      minHeight: "250px",
      maxHeight: "600px",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.3s linear"
    },
    "& .emoji-mart": {
      maxWidth: "100%"
    },
    "& form": {
      width: "80%",
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    "& .MuiFormControl-root": {
      width: "100%"
    }
  },
  nextButton: {
    margin: "0 auto",
    marginTop: "30px",
    width: "150px",
    marginBottom: "40px"
  },
  "@media screen and (max-width:600px)": {
    dialog: {
      "& .MuiDialog-paperWidthSm": {
        width: "80%"
      },
      "& .emoji-mart": {
        maxWidth: "100%"
      }
    }
  }
}));
export default useStyles;
