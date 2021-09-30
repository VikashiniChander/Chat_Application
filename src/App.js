import LeftSidePanel from './component/LeftSidePanel/LeftSidePanel'
import Conversation from './component/Conversation/Conversation';
import User from './component/User/User';
import Test from './Test';
import './App.scss';
import LogoIcon from './component/Common/LogoIcon/LogoIcon';

import Chat from './component/Chat/Chat';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import BellIcon from './component/Common/BellIcon/BellIcon';


function App() {
  return (

    <div className="app-container">
      <Grid item className="inbox-block " xs={12} md={12} container >
        <Grid  xs={1}>
          <LogoIcon className="logoicon"></LogoIcon>
        </Grid>
        <Grid  xs={10} sm={10}>
        <Typography variant="h5" className="header-message">Inbox</Typography>
        </Grid>
        {/* <Grid xs={1}></Grid> */}
        <Grid  xs={1}>
        <HelpOutlineIcon></HelpOutlineIcon>
        </Grid>
        
        <Grid xs={1}><BellIcon /></Grid>
        <Grid xs={1}>
        <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </Grid>
      </Grid>
      <Divider />
      <Grid container  className="chatSection">
        <LeftSidePanel />
        <Conversation />
        <Chat />
        <User />
        {/* <Test /> */}

      </Grid>
    </div>
  );
}




export default App;
