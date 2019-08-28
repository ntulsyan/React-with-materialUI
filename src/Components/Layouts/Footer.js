import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles, handleMuscleChange, selectedMuscle }) => (
  <Paper>
    <Tabs
      value={selectedMuscle}
      onChange={handleMuscleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {muscles.map(muscle => (
        <Tab label={muscle} />
      ))}
    </Tabs>
  </Paper>
);
