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
    margin: "15px"
  },
  MiniPaletteBoxes: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "250px",
    borderRadius: "5px",
    overflow: "hidden"
  },
  MiniPaletteBox: {
    height: "30px",
    width: "50px"
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
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.MiniPalette}>
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
