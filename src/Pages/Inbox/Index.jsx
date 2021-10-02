import React from "react";
import Conversation from "./../../component/Conversation/Conversation";
import User from "./../../component/User/User";
import Chat from "./../../component/Chat/Chat";
import Grid from "@material-ui/core/Grid";

const Index = () => {
  return (
    <>
   <Conversation />
      <Chat />
      <User />
    </>
  );
};

export default Index;
