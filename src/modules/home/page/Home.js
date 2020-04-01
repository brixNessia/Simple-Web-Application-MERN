import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Post from "../components/Post";
import PostField from "../components/PostField";
import * as postService from "../service";

const useStyles = makeStyles(theme => ({
  root: {
    // height: theme.spacing(90),
    width: theme.spacing(50),
    padding: theme.spacing(5)
  }
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector(({ posts }) => posts);
  const posts = (post.posts && post.posts) || [];

  useEffect(() => {
    dispatch(postService.fetchPosts());
  }, []);

  return (
    <div>
      <Paper elevation={3} className={classes.root}>
        <PostField />
        {posts.map((value, index) => (
          <Post
            key={index}
            author={value.author}
            post={value.post}
            date={value.createdAt}
          />
        ))}
      </Paper>
    </div>
  );
}
export default Home;
