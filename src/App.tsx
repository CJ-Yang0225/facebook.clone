import React from "react";
import { AppBody } from "./components/styles/App.styles";
import "./App.css";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      {/* TopNav */}
      <TopNav />

      {/* App body */}
      <AppBody>
        <Sidebar />
        {/* Region */}
        {/* Feed */}
        {/* Widgets */}
      </AppBody>
    </>
  );
};

export default App;
