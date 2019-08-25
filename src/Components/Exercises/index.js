import React from "react";
import { Grid } from "@material-ui/core";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  paper: {
    padding: "20px",
    marginTop: "10px",
    marginBottom: "10px"
  }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane styles={styles} />
    </Grid>
    <Grid item sm>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
