import React, { Fragment } from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

export default ({ styles, exercises }) => (
  <Paper style={styles.paper}>
    {exercises.map(([group, exercises]) => (
      <Fragment>
        <Typography variant="h5">{group}</Typography>
        <List component="nav" aria-label="secondary mailbox folder">
          {exercises.map(({ title }) => (
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Fragment>
    ))}
  </Paper>
);
