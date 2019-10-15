import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import styles from "../Styles/HomeStyles.js";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    this.props.deletePalette(id);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Home}>
        <div className={classes.HomeNav}>
          <h1 className={classes.HomeTitle}>React Color Palettes</h1>
          <Link to="/new-palette" className={classes.HomeLink}>
            <i className="fas fa-plus"></i>
          </Link>
        </div>
        <TransitionGroup className={classes.HomeMiniPalettes}>
          {this.props.palettes.map(p => {
            return (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <Link to={`/palette/${p.id}/`} key={p.id}>
                  <MiniPalette {...p} deletePalette={this.handleDelete} />
                </Link>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
