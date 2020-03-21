import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Button,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
    padding: theme.spacing(2)
  },
  button: {
    paddingTop: theme.spacing(2)
  }
}));

function Login() {
  const classes = useStyles();
  const currentDate = moment(new Date()).format("MMMM DD, YYYY");
  return (
    <Grid container justify="center">
      <Paper className={classes.root} elevation={3}>
        <TextField margin="normal" fullWidth label="Email" variant="outlined" />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          variant="outlined"
        />
        <Grid container item justify="flex-end" className={classes.button}>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default Login;
