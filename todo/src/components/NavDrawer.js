import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { GitHub, Twitter } from "@material-ui/icons";
import About from "./About";

const useStyles = makeStyles({
  list: {
    width: 180
  },
  info: {
    "text-align": "center",
    "font-weight": "bold"
  }
});

const NavDrawer = props => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={props.drawerOpened}
      onClose={props.toggleDrawer(false)}
    >
      <div
        className={classes.list}
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}
      >
        
      </div>
    </Drawer>
  );
};
export default NavDrawer;
