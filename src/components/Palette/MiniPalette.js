import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./MiniPaletteStyles.js";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.openDialog(this.props.id);
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
