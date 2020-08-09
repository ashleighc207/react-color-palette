const styles = {
  "@global": {
    ".fade-exit": {
      opacity: "1"
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 500ms ease-out"
    }
  },
  Home: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    width: "100%",
    maxWidth: "980px",
    flexDirection: "column",
    "& a": {
      textDecoration: "none",
      color: "#424242"
    },
    "& $HomeLink": {
      marginRight: "20px",
      fontFamily: '"Quicksand", sans-serif',
      background: "#1b3191",
      color: "#ffffff",
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "1px 2px 5px rgba(33, 33, 33, 0.5)",
      transition: "all 0.2s ease-in",
      "&:hover": {
        opacity: "0.8",
        boxShadow: "1px 2px 8px rgba(33, 33, 33, 0.5)"
      }
    }
  },
  HomeLink: {},
  HomeTitle: {
    fontFamily: '"Quicksand", sans-serif',
    marginLeft: "30px",
    marginBottom: "40px",
    marginTop: "40px",
    color: "#1b3191"
  },
  HomeMiniPalettes: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  HomeNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  DeleteDialog: {
    "& .MuiDialog-paperScrollPaper": {
      width: "250px",
      padding: "10px"
    }
  }
};

export default styles;
