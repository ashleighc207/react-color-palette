import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  MiniPalette: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    padding: "20px 10px",
    boxShadow:
      "2px 2px 5px 0px rgba(33, 33, 33, 0.3), 1px 1px 8px 0px rgba(33, 33, 33, 0.3)",
    margin: "15px",
    alignItems: "flex-start",
    height: "200px",
    position: "relative",
    "& i": {
      position: "absolute",
      top: "0px",
      right: "0px",
      width: "40px",
      height: "40px",
      borderRadius: "3px 8px 3px 3px",
      backgroundColor: "#aa3333",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      opacity: "0",
      zIndex: "25",
      transition: "all 0.3s ease-in"
    },
    "&:hover i": {
      opacity: "1"
    }
  },
  MiniPaletteBoxes: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "250px",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "#C4C4C4",
    height: "100vh",
    alignItems: "flex-start",
    width: "100%"
  },
  MiniPaletteBox: {
    height: "25%",
    width: "20%"
  },
  MiniPaletteInfo: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginTop: "30px"
  },
  MiniPaletteName: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: "500",
    margin: "0px"
  },
  MiniPaletteEmoji: {
    margin: "0px"
  }
};

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.deletePalette(this.props.id);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.MiniPalette}>
        <i className="fas fa-trash-alt" onClick={this.handleClick}></i>
        <div className={classes.MiniPaletteBoxes}>
          {this.props.colors.map(c => {
            return (
              <div
                style={{ backgroundColor: c.color }}
                className={classes.MiniPaletteBox}
                key={c.name}
              ></div>
            );
          })}
        </div>
        <div className={classes.MiniPaletteInfo}>
          <h4 className={classes.MiniPaletteName}>{this.props.paletteName}</h4>
          <p className={classes.MiniPaletteEmoji}>{this.props.emoji}</p>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
