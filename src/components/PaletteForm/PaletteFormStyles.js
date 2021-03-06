import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#E4E4E4",
    "& div": {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    "& div": {
      justifyContent: "flex-end"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#424242"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    width: "100%"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  heading: {
    fontSize: "22px",
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 700,
    color: "#212121",
    margin: "30px auto 20px auto"
  },
  drawerContents: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  chromePicker: {
    margin: "40px 0px"
  },
  addButton: {
    width: "100%",
    marginTop: "30px"
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    display: "flex"
  },
  mainContainer: {
    display: "flex",
    flexWrap: "wrap",
    height: "calc(100vh - 64px)",
    textAlign: "center",
    alignContent: "flex-start",
    width: "100%"
  },
  newColorBox: {
    width: "20%",
    height: "25%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  newColorBoxText: {
    fontFamily: "Quicksand",
    marginLeft: "10px",
    marginBottom: "5px"
  },
  newColorBoxIcon: {
    fontSize: "12px",
    marginBottom: "5px",
    marginRight: "10px",
    lineHeight: "1.5"
  },
  lightText: {
    color: "#ffffff"
  },
  darkText: {
    color: "#212121"
  },
  textInput: {
    marginBottom: "2rem",
    width: "100%"
  },
  form: {
    width: "80%"
  },
  cancelButton: {
    textDecoration: "none",
    marginRight: "40px"
  },
  saveButton: {
    marginRight: "40px"
  },
  "@media screen and (max-width:600px)": {
    drawer: {
      width: "0%"
    },
    drawerPaper: {
      width: "60%"
    },
    saveButton: {
      marginRight: "-10px"
    },
    content: {
      marginLeft: "0px"
    },
    appBarShift: {
      marginLeft: "0px"
    }
  }
}));
export default useStyles;
