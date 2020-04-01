import React from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2)
  },
  paper: {
    height: theme.spacing(5),
    padding: theme.spacing(1)
  }
}));

export default function Post(props) {
  const classes = useStyles();
  const { post, author, date } = props;
  const name = author.charAt();
  return (
    <Box className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Avatar src="/broken-image.jpg">{name.toUpperCase()}</Avatar>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>{post}</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
