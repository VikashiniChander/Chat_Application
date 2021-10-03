import "./User.scss";
import React, { useState } from "react";
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
import CustomizedTooltip from "../Common/ToolTip/CustomizedTooltip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import UserData from "./User.json";
import ThirdParty from "./ThirdParty.json";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ListItem from '@material-ui/core/ListItem';

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
    boxShadow: "none",
    maxHeight: 300,
    overflow: "auto",
  },
  typography: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Work Sans",
    marginTop: 10,
    marginBottom: 20,
  },
  Box: {
    display: "flex",
  },
  ListItem: {
    display: "flex",
    justifyContent: "end"
  },
 
}));

function User() {
  //create class based upon class outside of export default.
  const classes = useStyles();
  const [thirdPartyDetail, setThirdPartyDetail] = React.useState(
    ThirdParty.data[0].detail
  );
  const [selectedIndx, setSelectedIndx] = React.useState(0);
  const [userDataDetail, setUserDataDetail] = React.useState(UserData.data[0]);
  return (
    <Grid item lg={2} md={2} sm={2}>
      <Box className="user-block">
        <Box className="composeIcon">
          <ComposeIconBlack />
        </Box>

        <Grid item conatiner>
          <Grid item conatiner>
            <Grid
              onClick={() => {
                if (selectedIndx !== 0) {
                  setThirdPartyDetail(ThirdParty.data[selectedIndx - 1].detail);
                  setSelectedIndx(selectedIndx - 1);
                  setUserDataDetail(UserData.data[selectedIndx - 1]);
                }
              }}
              className="arrowBackIcon"
            >
              <CustomizedTooltip title="prev">
                <ArrowBackIosIcon></ArrowBackIosIcon>
              </CustomizedTooltip>
            </Grid>

            <Grid className="userIcon">
              <Avatar src="https://material-ui.com/static/images/avatar/1.jpg"></Avatar>
            </Grid>
            <Grid class="arrowIcon">
              <CustomizedTooltip title="next">
                <ArrowForwardIosIcon
                  // disabled={selectedIndx === ThirdParty.data.length - 1}
                  onClick={() => {
                    if (selectedIndx !== ThirdParty.data.length - 1) {
                      setThirdPartyDetail(
                        ThirdParty.data[selectedIndx + 1].detail
                      );
                      setUserDataDetail(UserData.data[selectedIndx + 1]);
                      setSelectedIndx(selectedIndx + 1);
                    }
                  }}
                ></ArrowForwardIosIcon>
              </CustomizedTooltip>
            </Grid>
          </Grid>

          {userDataDetail && (
            <Paper className="rectangle">
              <Box wrap="wrap" container mt={4}>
                <Grid xs={12}>
                  <Typography class={classes.typography}>
                    {`${userDataDetail.contact.firstName} ${userDataDetail.contact.lastName}`}
                  </Typography>
                </Grid>
                <Grid>
                  <MailOutlineSharpIcon></MailOutlineSharpIcon>
                </Grid>
                <Grid>
                  <Box className="rectangle-text">
                    {" "}
                    {`${userDataDetail.contact.email} `}
                  </Box>
                </Grid>
              </Box>
              <Grid wrap="nowrap" container>
                <Grid>
                  <PhoneOutlinedIcon></PhoneOutlinedIcon>
                </Grid>
                <Grid>
                  <Box className="rectangle-text">{`${userDataDetail.contact.mobile.number} `}</Box>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
        <Paper  class={classes.paper}      
        >

        {thirdPartyDetail &&
          thirdPartyDetail.length > 0 &&
          thirdPartyDetail.map((t) => {
            return (
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box textAlign="right"  class={classes.Box}>
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
                      <Box className="rectangle-text">{t.gender}</Box>
                      <Box className="rectangle-text italic-text">{t.age}</Box>
                      <Box className="rectangle-text">Adam Horsman</Box>
                      <Box className="rectangle-text italic-text">
                        {t.color}
                      </Box>
                      <Box className="rectangle-text">{t.country}</Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
          </Paper>
      </Box>
    </Grid>
  );
}

export default User;
