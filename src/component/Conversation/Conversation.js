import "./Conversation.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import { createTheme } from '@mui/material/styles';
import blue from "@mui/material/colors/blue";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import ComposeIcon from "../Common/ComposeIcon/ComposeIcon";
import Typography from "@material-ui/core/Typography";
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";
import InfiniteScroll from "react-infinite-scroll-component";

import ConversationData from "./Conversion.json";
import Moment from "react-moment";
import { withStyles } from '@material-ui/styles';
let message = "0";
const styles = {
  ListItemText: {
    overflow: "hidden",
    position: "relative",
    lineHeight: "1em",
    height: "2.5em",
    width: '200px',
    "&:before": {
      content:  '"..."',
      float: 'right',
      marginTop: '1.5em'
    },
  },
};
class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ConversationData: ConversationData.data,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }
  fetchMoreData = () => {
    this.setState({
      ConversationData: [
        ...this.state.ConversationData,
        ...ConversationData.data,
      ],
    });
  };
  render() {
    const { classes } = this.props;
    console.log(classes)
    return (
      <Grid className="blue-bg block-spacing">
        <Box>
          <Grid className="compose-block">
            <Box className="compose-button">
              <ComposeIcon />
              <Typography className="compose-text">Compose</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} container className="search-box">
            <Grid
              item
              xs={10}
              component="form"
              container
              className="search-icon"
            >
              <Grid xs={2}>
                {" "}
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid xs={10}>
                {" "}
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
              </Grid>
            </Grid>
            <Grid xs={1} className="filterIcon">
              <CustomizedTooltip title="Filter" placement="left">
                <FilterListOutlinedIcon></FilterListOutlinedIcon>
              </CustomizedTooltip>
            </Grid>
          </Grid>
          <InfiniteScroll
            dataLength={this.state.ConversationData.length}
            next={this.fetchMoreData}
            hasMore={true}
            /*  loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          } */
          >
            {this.state.ConversationData.map((c, indx) => {
              return (
                <List
                  className={`message-block spacing ${
                    indx % 2 === 0 ? "blue-bg" : " white-bg"
                  }`}
                >
                  {c.unread && c.unread.length > 0 && (
                    <Grid className="dot"></Grid>
                  )}
                  <Grid container>
                    <Grid item xs={2} md={3}>
                      <ListItemIcon>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6} md={9}>
                      <ListItem button key="RemySharp">
                        <ListItemText
                          primary={`${c.contact.firstName} ${c.contact.lastName}`}
                          class="user-name"
                        ></ListItemText>
                        <ListItemText align="right" className="message">
                          <Moment format="hh:mm A" withTitle>
                            {c.created.at}
                          </Moment>
                        </ListItemText>
                      </ListItem>
                      <ListItemText
                        className={`message ${classes.ListItemText}`}
                        //className={classes.Typography
                      >
                        {c.lastMessage.message}
                      </ListItemText>
                    </Grid>
                  </Grid>
                </List>
              );
            })}
          </InfiniteScroll>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Conversation);
