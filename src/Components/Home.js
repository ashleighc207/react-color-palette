import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import styles from "../Styles/HomeStyles.js";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { red, green } from "@material-ui/core/colors";

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
        <Dialog open={true} className={classes.DeleteDialog}>
          <DialogTitle> Confirm Delete </DialogTitle>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: green[100], color: green[300] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ fontSize: "20px" }}>Delete</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[300] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ fontSize: "20px" }}>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
