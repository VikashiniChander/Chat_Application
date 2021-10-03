import "./LeftSidePanel.scss";
import React from "react";
import Grid from "@material-ui/core/Grid";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsInputAntennaOutlinedIcon from "@material-ui/icons/SettingsInputAntennaOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
// import PodcastsOutlinedIcon from '@material-ui/icons/PodcastsOutlined';
// import InsightsIcon from '@material-ui/icons/Insights';
import Podcast from "../Common/Podcast/Podcast";
import PanelIcon from "../Common/PanelIcon/PanelIcon";
import InboxIcon from "../Common/InboxIcon/InboxIcon";
import ConstructionIcon from "../Common/ConstructionIcon/ConstructionIcon";
import GroupIcon from "../Common/GroupIcon/GroupIcon";
import TextIcon from "../Common/TextIcon/TextIcon";
import CustomizedTooltip from "../Common/ToolTip/CustomizedTooltip";
import { NavLink } from "react-router-dom";

function LeftSidePanel() {
  return (
    <Grid item xs={1} className="panel-container" direction="row" container>
      <Grid lg={9} md={7} direction="column">
        <Grid lg={1}>
        <NavLink to={"/Inbox"} exact activeClassName="selected">
          <InboxIcon />
        </NavLink>
        </Grid>
        <Grid lg={1}>
        <NavLink to={"/Campaigns"} exact activeClassName="selected">
          <Podcast />
        </NavLink>
        </Grid>
        <Grid lg={1}>
        <NavLink to={"/Templates"} exact activeClassName="selected">
          <TextIcon />
        </NavLink>
        </Grid>
        <Grid lg={1}>
        <NavLink to={"/Contacts"} exact activeClassName="selected">
          <GroupIcon />
        </NavLink>
        </Grid>
        <Grid lg={1}>
        <NavLink to={"/Tools"} exact activeClassName="selected">
          <PanelIcon />
        </NavLink>
        </Grid>

        <Grid lg={1}>
        <NavLink to={"/Featurerequests"} exact activeClassName="selected">
          <ConstructionIcon />
        </NavLink>
        </Grid>
      </Grid>
      <Grid direction="column" lg={3}>
        <CustomizedTooltip title="Status">
          <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
        </CustomizedTooltip>
        <CustomizedTooltip title="Status">
          <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
        </CustomizedTooltip>
      </Grid>
    </Grid>
  );
}

export default LeftSidePanel;
