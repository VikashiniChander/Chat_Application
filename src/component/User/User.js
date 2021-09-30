import "./User.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MuiCollapse from "@material-ui/core/Collapse";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { spacing } from "@material-ui/system";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ComposeIconBlack from "../Common/ComposeIconBlack/ComposeIconBlack";
import ArrowBackwardIcon from "../Common/ArrowBackwardIcon/ArrowBackwardIcon";
import ArrowForwardIcon from "../Common/ArrowForwardIcon/ArrowForwardIcon";
import CustomizedTooltip from "../Common/ToolTip/CustomizedTooltip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import UserData from "./User.json";
import ThirdParty from "./ThirdParty.json";
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "70vw",
    borderRadius: 15,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 20,
  },
  typography: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Work Sans",
  },
  content: {
    justifyContent: "end",
  }
}));

function User() {
  //create class based upon class outside of export default.
  const classes = useStyles();
  console.log(UserData.data);
  return (
    <Grid item lg={2} md={2}>
      <Box spacing={2} className="user-block">
        <Box className="composeIcon">
          <ComposeIconBlack />
        </Box>

        <Grid item conatiner>
          {/* <Grid><ArrowForwardIcon /></Grid> */}
          <Grid className="userIcon">
            {/*  <Box sx={{pl:2}}>
              
            <KeyboardArrowLeftIcon />
            </Box> */}
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg"></Avatar>
          </Grid>

          {/* <Grid><ArrowBackwardIcon /></Grid> */}
          {UserData && UserData.data && (
            <Paper className="rectangle">
              <Box wrap="wrap" container mt={2}>
                <Grid xs={12}>
                  <Typography class={classes.typography}>
                    {`${UserData.data.contact.firstName} ${UserData.data.contact.lastName}`}
                  </Typography>
                </Grid>
                <Grid>
                  <MailOutlineSharpIcon></MailOutlineSharpIcon>
                </Grid>
                <Grid>
                  <Box className="rectangle-text">
                    {" "}
                    {`${UserData.data.contact.email} `}
                  </Box>
                </Grid>
              </Box>
              <Grid wrap="nowrap" container>
                <Grid>
                  <PhoneOutlinedIcon></PhoneOutlinedIcon>
                </Grid>
                <Grid>
                  <Box className="rectangle-text">{`${UserData.data.contact.mobile.number} `}</Box>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
        {ThirdParty &&
          ThirdParty.data.length > 0 &&
          ThirdParty.data.map((t) => {
            return (
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header" 
                >
                  <Box textAlign="right">
                    <CustomizedTooltip placement="top" title="Configure">
                      <SettingsOutlinedIcon className="gearIcon"></SettingsOutlinedIcon>
                    </CustomizedTooltip>
                    <ExpandMoreIcon />
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid wrap="nowrap" spacing={0} container>
                    <Grid xs={1}>
                      <img src="App_MUI\src\assets\address1.png" />
                    </Grid>
                    <Grid className="message-spacing">
                      <Box className="rectangle-text">123 Main St</Box>
                      <Box className="rectangle-text italic-text">
                        Contact Owner
                      </Box>
                      <Box className="rectangle-text">Adam Horsman</Box>
                      <Box className="rectangle-text italic-text">
                        Favourite Color
                      </Box>
                      <Box className="rectangle-text">Green</Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Box textAlign="right">
              <CustomizedTooltip placement="top" title="Configure">
                <SettingsOutlinedIcon className="gearIcon"></SettingsOutlinedIcon>
              </CustomizedTooltip>
              <ExpandMoreIcon />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid wrap="nowrap" spacing={0} container>
              <Grid xs={1}>
                <img src="App_MUI\src\assets\address1.png" />
              </Grid>
              <Grid className="message-spacing">
                <Box className="rectangle-text">123 Main St</Box>
                <Box className="rectangle-text italic-text">Contact Owner</Box>
                <Box className="rectangle-text">Adam Horsman</Box>
                <Box className="rectangle-text italic-text">
                  Favourite Color
                </Box>
                <Box className="rectangle-text">Green</Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
}

export default User;
