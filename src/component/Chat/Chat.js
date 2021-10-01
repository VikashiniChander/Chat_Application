import "./Chat.scss";
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
import SendIcon from "@material-ui/icons/Send";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import CheckIcon from "@material-ui/icons/Check";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import AttachFileSharpIcon from "@material-ui/icons/AttachFileSharp";
import InsertLinkSharpIcon from "@material-ui/icons/InsertLinkSharp";
import TextIcon from "../Common/TextIcon/TextIcon";
import TokenIcon from "../Common/TokenIcon/TokenIcon";

// import TextSnippetOutlinedIcon from '@material-ui/icons/TextSnippetOutlined';
// import TextSnippetOutlinedIcon from '@material-ui/icons/TextSnippetOutlined';
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";

class Chat extends Component {
  render() {
    return (
      <Grid item lg={7} md={6} className="chat-grid">
        <Grid className="scroll-flow">
        <List className="chat-left">
          <Grid>
            <Grid>
              <ListItem button key="RemySharp">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <ListItemText
                  className="userName"
                  primary="John Wick"
                ></ListItemText>
                <ListItemText
                  className="timeStamp"
                  secondary="09:30"
                ></ListItemText>
              </ListItem>
            </Grid>
            <Grid className="chat-block">
              <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
            </Grid>
            <CheckIcon className="tickGreen" />
          </Grid>
        </List>
        <List className="chat-right">
          <Grid>
            <Grid>
              <ListItem button key="RemySharp">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <ListItemText
                  className="userName"
                  primary="John Wick"
                ></ListItemText>
                <ListItemText
                  className="timeStamp"
                  secondary="09:30"
                ></ListItemText>
              </ListItem>
            </Grid>
            <Grid className="chat-block">
              <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
            </Grid>
            <CheckIcon className="tickGreen" />
          </Grid>
        </List>
        <List className="chat-left">
          <Grid>
            <Grid className="chat-msg">
              <ListItem button key="RemySharp">
                <Avatar
                  alt="Remy Sharp"
                />
                <ListItemText
                  className="userName"
                  primary="John Wick"
                ></ListItemText>
                <ListItemText
                  className="timeStamp"
                  secondary="09:30"
                ></ListItemText>
              </ListItem>
            </Grid>
            <Grid className="chat-block">
              <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
            </Grid>
            <Grid className="chat-block">
              <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
            </Grid>
            <CheckIcon className="tickGreen" />
          </Grid>
        </List>
        </Grid>
        <Divider />
        <Grid container className="message-box" >
          <Grid xs={1} item className="icon">
            <Grid>
            
              <TokenIcon />
            </Grid>
          </Grid>
          <Grid xs={1} item className="icon">
            <CustomizedTooltip placement="top" title="Links">
              <InsertLinkSharpIcon></InsertLinkSharpIcon>
            </CustomizedTooltip>
          </Grid>
          <Grid xs={1} item className="icon">
            <CustomizedTooltip placement="top" title="Attachments">
              <AttachFileSharpIcon></AttachFileSharpIcon>
            </CustomizedTooltip>
          </Grid>
          <Grid xs={1} item className="icon">
            <TextIcon />
          </Grid>
          <Grid item lg={9} sm={6}>
            <TextField label="Type a message..." fullWidth />
          </Grid>
          <Grid xs={1} item className="icon">
            <Grid>
              <CustomizedTooltip placement="top" title="Send">
                <SendOutlinedIcon></SendOutlinedIcon>
              </CustomizedTooltip>
            </Grid>
          </Grid>
          {/* <Grid xs={1} className="icon">
            <Grid>
            
              <TokenIcon />
            </Grid>
          </Grid> */}

         
        </Grid>
      </Grid>
    );
  }
}

export default Chat;
