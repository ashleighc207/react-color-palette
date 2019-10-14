const styles = {
  Nav: {
    display: "flex",
    justifyContent: "space-between",
    height: "8%",
    fontFamily: '"Quicksand", sans-serif',
    fontSize: "24px",
    "& .MuiInputBase-root": {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: "14px"
    },
    "& .MuiMenu-paper .MuiMenuItem-root": {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: "14px"
    },
    "& .MuiSelect-select:focus": {
      background: "transparent"
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #0652dd"
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#0652dd"
    },
    '& input[type="range"]': {
      "-webkit-appearance": "none",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      marginLeft: "20px"
    },

    '& input[type="range"]::-webkit-slider-thumb': {
      "-webkit-appearance": "none"
    },

    '& input[type="range"]:focus': {
      outline: "none"
    },

    '& input[type="range"]::-webkit-slider-thumb': {
      "-webkit-appearance": "none",
      height: "16px",
      width: "16px",
      borderRadius: "50%",
      background: "#0652dd",
      cursor: "pointer",
      marginTop: "-3.5px",
      boxShadow:
        "1px 1px 1px rgba(33, 33, 33, 0.5), 0px 0px 1px rgba(33, 33, 33, 0.5)"
    },

    '& input[type="range"]::-moz-range-thumb': {
      height: "16px",
      width: "16px",
      borderRadius: "50%",
      background: "#0652dd",
      cursor: "pointer",
      boxShadow:
        "1px 1px 1px rgba(33, 33, 33, 0.5), 0px 0px 1px rgba(33, 33, 33, 0.5)"
    },

    '& input[type="range"]:active::-webkit-slider-thumb': {
      boxShadow:
        "1px 1px 7px 0px rgba(6, 82, 221, 0.5), 0px 0px 10px 0px rgba(6, 82, 221, 0.5), 0px 0px 13px 0px rgba(6, 82, 221, 0.5)"
    },

    '& input[type="range"]:active::-moz-range-thumb': {
      boxShadow:
        "1px 1px 7px 0px rgba(6, 82, 221, 0.5), 0px 0px 10px 0px rgba(6, 82, 221, 0.5), 0px 0px 13px 0px rgba(6, 82, 221, 0.5)"
    },

    '& input[type="range"]::-webkit-slider-runnable-track': {
      width: "100%",
      height: "8px",
      cursor: "pointer",
      background: "#e0e0e0",
      borderRadius: "20px",
      boxShadow:
        "1px 1px 1px rgba(33, 33, 33, 0.3), 0px 0px 1px rgba(33, 33, 33, 0.3)"
    },

    '& input[type="range"]:focus::-webkit-slider-runnable-track': {
      background: "#e0e0e0"
    },

    '& input[type="range"]::-moz-range-track': {
      width: "100%",
      height: "8px",
      cursor: "pointer",
      background: "#e0e0e0",
      borderRadius: "20px",
      boxShadow:
        "1px 1px 1px rgba(33, 33, 33, 0.3), 0px 0px 1px rgba(33, 33, 33, 0.3)"
    }
  },

  NavContainer: {
    display: "flex"
  },

  NavSelectContainer: {
    display: "flex",
    alignItems: "center"
  },

  NavSelect: {
    marginRight: "20px"
  },

  NavLinkContainer: {
    color: "#212121",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: "20px"
  }
};

export default styles;
