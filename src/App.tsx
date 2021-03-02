import React from "react";
import { Aside, Container, Header, Main, Wrapper } from "./App.styles";
import TopNav from "./components/TopNav/TopNav";
import Sidebar from "./components/Sidebar/Sidebar";
import StoryReel from "./components/StoryReel/StoryReel";
import MessageSender from "./components/MessageSender/MessageSender";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";

const App = () => {
  return (
    <>
      <Header>
        <TopNav />
      </Header>
      <Container className="container">
        <Aside>
          <Sidebar />
        </Aside>
        <Main className="main">
          <StoryReel />
          <MessageSender />
        </Main>
        <Wrapper>
          <Widget />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
