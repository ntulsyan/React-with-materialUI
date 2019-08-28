import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default ({ styles }) => (
  <Paper style={styles.paper}>
    <Typography variant="h4">Welcome</Typography>
    <Typography variant="h6" style={{ marginTop: "20px" }}>
      Please select an item from the left pane
    </Typography>
  </Paper>
);
