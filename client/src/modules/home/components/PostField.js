import React, { useState } from "react";
import { Grid, Divider, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as postService from "../service";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(0.7)
  },
  divider: {
    paddingBottom: theme.spacing(2)
  }
}));

export default function PostField(props) {
  const classes = useStyles();
  const { socket } = props;
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();
  const handleChange = event => {
    setFormState({ [event.target.name]: event.target.value });
  };

  const handlePost = () => {
    dispatch(postService.sendPost(formState)).then(() => {
      dispatch(postService.fetchPosts());
    });
  };

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={9}>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            label="Post"
            name="post"
            onChange={handleChange}
            value={formState.post || ""}
            autoFocus
          />
        </Grid>
        <Grid item xs={2} className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlePost}
          >
            Post
          </Button>
        </Grid>
      </Grid>
      <div className={classes.divider}>
        <Divider />
      </div>
    </>
  );
}
