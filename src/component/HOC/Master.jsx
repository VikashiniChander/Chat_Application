import React from "react";
import LogoIcon from "./../Common/LogoIcon/LogoIcon";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BellIcon from "./../Common/BellIcon/BellIcon";
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";
import LeftSidePanel from "./../LeftSidePanel/LeftSidePanel";

import Routing from './../../Routing';
const Master = () => {
  return (
    <>
      <Grid item className="inbox-block " xs={12} md={12} container>
        <Grid xs={1}>
          <LogoIcon className="logoicon"></LogoIcon>
        </Grid>
        <Grid xs={10} sm={10}>
          <Typography variant="h5" className="header-message">
            Inbox
          </Typography>
        </Grid>
        {/* <Grid xs={1}></Grid> */}
        <Grid xs={1}>
          <CustomizedTooltip title="Support center" placement="bottom">
            <HelpOutlineIcon></HelpOutlineIcon>
          </CustomizedTooltip>
        </Grid>

        <Grid xs={1}>
          <BellIcon />
        </Grid>
        <Grid xs={1}>
          <CustomizedTooltip title="Settings" placement="bottom">
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
          </CustomizedTooltip>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className="chatSection">
  
        
        <Routing></Routing>
      </Grid>
    </>
  );
};

export default Master;
