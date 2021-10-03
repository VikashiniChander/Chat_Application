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
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import ConversationData from "./Conversion.json";
import Moment from "react-moment";
import { withStyles } from "@material-ui/styles";
import Searchbox from "./../Common/Searchbox/Index";

const styles = {
  ListItemText: {
    overflow: "hidden",
    position: "relative",
    lineHeight: "1em",
    height: "2.5em",
    // width: "180px",
    // paddingLeft: 10,
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
  },
  root: {
    MuiAvatar: {
      height: 25
    }
  }
}

const styleAvatar = makeStyles((theme) => ({
    avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    bottom: 10,
    left: 20,
    height: "25 !important"
  },
  
}));

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ConversationData: ConversationData.data,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.setUsers = this.setUsers.bind(this);
  }
  fetchMoreData = () => {
    this.setState({
      ConversationData: [
        ...this.state.ConversationData,
        ...ConversationData.data,
      ],
    });
  };
  getStatusIcon = (type) => {
    switch (type) {
      case "whatsApp":
        return <WhatsAppIcon className="whatsApp"></WhatsAppIcon>;
      case "sms":
        return <SmsOutlinedIcon className="whatsApp"></SmsOutlinedIcon>;
      default:
        return <></>;
    }
  };
  setUsers = (user) => {
    if (user) {
  
      this.setState({
        ConversationData: this.state.ConversationData.filter((p) =>
          user.includes(p.contact.firstName)
        ),
      });
    } else {
      this.setState({
        ConversationData: ConversationData.data,
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid className="blue-bg block-spacing" lg="auto" md="auto">
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
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid xs={10}>
                <Searchbox setUsers={this.setUsers}></Searchbox>
              </Grid>
            </Grid>
            <Grid xs={1} className="filterIcon">
              <CustomizedTooltip title="Filter" placement="left">
                <FilterListOutlinedIcon></FilterListOutlinedIcon>
              </CustomizedTooltip>
            </Grid>
          </Grid>
          <Grid className="height-conversation scroll">
          <InfiniteScroll className="scroll"
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
                    indx % 2 === 0 ? " white-bg" : "blue-bg"
                  }`}
                >
                  {c.unread && c.unread.length > 0 && (
                    <Grid className="dot"></Grid>
                  )}
                  <Grid container>
                    <Grid item xs={2} md={3}>
                      <ListItemIcon>
                        {/* <Avatar
                          alt="Remy Sharp"
                          src="https://material-ui.com/static/images/avatar/1.jpg"
                        /> */}
                        <Avatar class="avatar"> <Grid className="letter">R</Grid>
                          {/* <Grid className="dot-w"> 
                            <WhatsAppIcon className="whatsApp"></WhatsAppIcon>
                            </Grid> */}
                            <Avatar className="avatar-icon" >  <WhatsAppIcon></WhatsAppIcon></Avatar>
                        </Avatar>
                        {/* <Grid class="avatar">
                          <Grid className="letter">R</Grid>
                          <Grid className="dot-w">
                            {this.getStatusIcon(c.type)}
                          </Grid>{" "}
                        </Grid> */}
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
          </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Conversation);
