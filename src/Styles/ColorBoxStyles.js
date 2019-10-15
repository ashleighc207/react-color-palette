const styles = {
  ColorBox: {
    width: "20%",
    height: "25%",
    display: "flex",
    alignItems: "flex-end",
    fontFamily: '"Quicksand", sans-serif',
    position: "relative",
    "&:hover $ColorBoxCopy": {
      transition: "0.5s",
      opacity: "1"
    }
  },
  ColorBoxInfo: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "5px",
    width: "100%",
    alignItems: "flex-end"
  },

  ColorBoxLink: {
    textDecoration: "none",
    color: "#212121",
    background: "rgba(255, 255, 255, 0.3)",
    padding: "2px 4px",
    fontWeight: "700",
    borderRadius: "5px",
    fontSize: "0.8rem"
  },

  ColorBoxName: {
    color: "#ffffff",
    fontWeight: "700",
    letterSpacing: "1.5px",
    fontSize: "0.7rem",
    paddingBottom: "4px"
  },

  ColorBoxCopyContainer: {
    position: "absolute",
    top: "calc(50% - 14px)",
    left: "calc(50% - 31px)"
  },

  ColorBoxCopy: {
    opacity: "0",
    border: "none",
    borderRadius: "5px",
    background: "rgba(255, 255, 255, 0.3)",
    color: "#212121",
    padding: "5px 10px",
    fontSize: "1rem",
    textTransform: "uppercase",
    outline: "none",
    letterSpacing: "1px"
  },

  ColorBoxOverlay: {
    opacity: "0",
    zIndex: "0",
    transform: "scale(0.1)",
    transition: "transform 0.6s ease-in-out"
  },

  ColorBoxOverlayShow: {
    opacity: "1",
    transform: "scale(10)",
    zIndex: "5",
    position: "absolute",
    width: "100%",
    height: "100%"
  },

  ColorBoxOverlayText: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
    transitionDelay: "0.3s"
  },

  ColorBoxOverlayShowText: {
    opacity: "1",
    zIndex: "6",
    transform: "scale(1)"
  },

  ColorBoxCopiedBanner: {
    background: "rgba(255, 255, 255, 0.3)",
    width: "100%",
    color: "#ffffff",
    textShadow: "2px 2px rgba(33, 33, 33, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  ColorBoxCopiedColor: {
    color: "#ffffff",
    textShadow: "2px 2px rgba(33, 33, 33, 0.3)",
    fontSize: "2.5rem",
    marginTop: "20px",
    fontWeight: "500"
  },

  darkText: {
    color: "#212121"
  },

  lightText: {
    color: "#ffffff"
  },

  "@media screen and (max-width: 600px)": {
    ColorBox: {
      width: "100%",
      height: "10%"
    }
  }
};

export default styles;
