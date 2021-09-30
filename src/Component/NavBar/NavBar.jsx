import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBarCollapse from "./AppBarCollapse";
import { AppBar } from "@material-ui/core";



const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {
    color:"white"
  },
  appTitle: {
    color:"white"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    // <AppBar position="fixed">
      <Toolbar className={classes.toolBarCss} > 
        <IconButton
          aria-label="Menu"
          className={classes.toggleDrawer}
        >
          <ShoppingCartIcon />
        </IconButton>
        <Typography
          variant="title"
          className={classes.appTitle}
        >
          Online Shopping
        </Typography>
        <AppBarCollapse />
      </Toolbar>
      // </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
