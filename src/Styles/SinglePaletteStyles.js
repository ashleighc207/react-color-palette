const styles = {
  SinglePaletteColorContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    height: "100vh",
    "& .ColorBox": {
      width: "20%",
      height: "50%",
      display: "flex",
      alignItems: "flex-end"
    }
  },
  SinglePaletteText: {
    margin: "0 0 5px 10px",
    color: "#ffffff",
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: "700",
    fontSize: "14px"
  },

  SinglePaletteGoBack: {
    cursor: "pointer",
    outline: "none",
    border: "none",
    background: "none",
    fontFamily: '"Open Sans", sans-serif',
    textTransform: "uppercase",
    fontSize: "18px",
    color: "#212121"
  },

  SinglePaletteIcon: {
    fontSize: "16px"
  }
};

export default styles;
