import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InboxPage from "./../src/Pages/Inbox/Index";
import CampaignsPage from "./../src/Pages/Campaigns";

import ContactsPage from "./../src/Pages/Contacts";
import FeatureRequestsPage from "./../src/Pages/FeatureRequests";

import InsightsPage from "./../src/Pages/Insights";
import TemplatesPage from "./../src/Pages/Templates";

import ToolsPage from "./../src/Pages/Tools";
import LeftSidePanel from "./component/LeftSidePanel/LeftSidePanel";

const Routing = () => {
  return (
    <Router>
      <LeftSidePanel></LeftSidePanel>
      <Switch>
        <Route exact path="/Inbox" component={InboxPage} />
        <Route exact path="/Campaigns" component={CampaignsPage} />
        <Route exact path="/Templates" component={TemplatesPage} />
        <Route exact path="/Contacts" component={ContactsPage} />
        <Route exact path="/Insights" component={InsightsPage} />
        <Route exact path="/Tools" component={ToolsPage} />
        <Route exact path="/Featurerequests" component={FeatureRequestsPage} />
      </Switch>
    </Router>
  );
};
export default Routing;
