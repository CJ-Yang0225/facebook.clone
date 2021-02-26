import React from "react";
import { AppBody } from "./App.styles";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  return (
    <div className="app">
      {/* TopNav */}
      <TopNav />

      {/* App body */}
      <AppBody className="app__body">
        <Sidebar />
        {/* StoryReel */}
        {/* Feed */}
        {/* Widgets */}
      </AppBody>
    </div>
  );
};

export default App;
