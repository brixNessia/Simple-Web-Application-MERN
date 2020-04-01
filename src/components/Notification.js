import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";

const useStyle = makeStyles(theme => ({
  error: {
    backgroundColor: "#ff5959",
    color: "#fff"
  }
}));

export default function Notification() {
  const classes = useStyle();
  const hasError = useSelector(({ authentication }) => authentication);
  const open = hasError.signInFailed && hasError.signInFailed;

  return (
    <Snackbar
      open={open}
      onClose={open}
      TransitionComponent="fade"
      message={(hasError.error && hasError.error.message) || ""}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      ContentProps={{
        classes: {
          root: classes.error
        }
      }}
    />
  );
}
