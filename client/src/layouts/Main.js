import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  List,
  Avatar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import * as userActions from "modules/auth/store/actionCreator";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8)
  },
  avatarContainer: {
    marginTop: theme.spacing(2)
  },
  toolbarInner: {
    minHeight: 15
  },
  avatarName: {
    paddingTop: theme.spacing(1)
  }
}));

export default function Main(props) {
  const { children, userName } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(({ authentication }) => authentication);
  const username = currentUser.user && currentUser.user.username;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.avatarContainer}>
          <Grid container item justify="center">
            <Avatar className={classes.avatar} src="/broken-image.jpg" />
          </Grid>
          <Grid container item justify="center" className={classes.avatarName}>
            <Typography> {`Hi, ${username}`}</Typography>
          </Grid>
        </div>
        <div className={classes.toolbarInner} />
        {/* <Divider /> */}
        <List>
          {["Inbox", "Profile"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <AccountCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <ListItem button onClick={() => dispatch(userActions.signOut())}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
