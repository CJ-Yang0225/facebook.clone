import React from "react";
import { AppBody, AppMain } from "./App.styles";
import TopNav from "./components/TopNav/TopNav";
import Sidebar from "./components/Sidebar/Sidebar";
import StoryReel from "./components/StoryReel/StoryReel";
import Feed from "./components/Feed/Feed";
import MessageSender from "./components/MessageSender/MessageSender";

const App = () => {
  return (
    <div className="app">
      {/* TopNav */}
      <TopNav />

      {/* App body */}
      <AppBody className="app__body">
        <Sidebar />
        {/* StoryReel */}
        <AppMain className="app__main">
          <StoryReel />
          <MessageSender />

          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </AppMain>
        <div className="app__widgets"></div>
      </AppBody>
    </div>
  );
};

export default App;
