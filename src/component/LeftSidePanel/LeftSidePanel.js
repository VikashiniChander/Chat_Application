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
      <Grid xs={9} direction="column">
        <NavLink to={"/Inbox"} exact activeClassName="selected">
          <InboxIcon />
        </NavLink>
        <NavLink to={"/Campaigns"} exact activeClassName="selected">
          <Podcast />
        </NavLink>
        <NavLink to={"/Templates"} exact activeClassName="selected">
          <TextIcon />
        </NavLink>
        <NavLink to={"/Contacts"} exact activeClassName="selected">
          <GroupIcon />
        </NavLink>
        <NavLink to={"/Tools"} exact activeClassName="selected">
          <PanelIcon />
        </NavLink>
        <NavLink to={"/Featurerequests"} exact activeClassName="selected">
          <ConstructionIcon />
        </NavLink>
      </Grid>
      <Grid direction="column">
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
