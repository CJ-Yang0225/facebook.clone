import React from "react";

// Styled
import { Aside, Content, Header, Main, Wrapper } from "./App.styles";

// Components
import TopNav from "./components/TopNav/TopNav";
import Sidebar from "./components/Sidebar/Sidebar";
import StoryReel from "./components/StoryReel/StoryReel";
import MessageSender from "./components/MessageSender/MessageSender";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";
import { useUserContext } from "./components/ContextProvider/ContextProvider";

const App = () => {
  const [{ user }, dispatch] = useUserContext();
  const isLoggedIn = user === null;

  return isLoggedIn ? (
    <Login />
  ) : (
    <>
      <Header>
        <TopNav />
      </Header>
      <Content className="content">
        <Aside>
          <Sidebar />
        </Aside>
        <Main className="main">
          <StoryReel />
          <MessageSender />
          <Feed />
        </Main>
        <Wrapper className="news">
          <Widget />
        </Wrapper>
      </Content>
    </>
  );
};

export default App;
