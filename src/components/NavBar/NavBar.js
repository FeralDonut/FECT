import React, { useState } from "react";
import Filters from '../Filters/Filters';
import { StylesProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HouseIcon from '@material-ui/icons/House';
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StylesProvider injectFirst>
      <AppBar position="static" className="NavBarContainer">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon className="menuButton" onClick={() => setOpen(!open)} />
          </IconButton>
          <div className="title">
            <HouseIcon className="logo" />
            partment Finder
          </div>
        </Toolbar>
      </AppBar>
      <Collapse in={open}>
        <Paper elevation={4} className="paper">
          <Filters />
        </Paper>
      </Collapse>
    </StylesProvider>
  );
};

export default NavBar;
