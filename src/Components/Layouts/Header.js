import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" gutterBottom>
          Exercises Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
