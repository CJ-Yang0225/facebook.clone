import React from "react";

// Material-UI
import {
  Search,
  Home,
  PeopleOutline,
  OndemandVideo,
  Storefront,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

// Styled
import { TopNavStart, TopNavCenter, TopNavEnd } from "./TopNav.styles";

// Images
import fbLogo from "../../images/f_logo_RGB-Hex-Blue_512.png";

// Context
import { useUserContext } from "../ContextProvider/ContextProvider";

const TopNav: React.FC = () => {
  const [{ user }, dispatch] = useUserContext();
  return (
    <>
      <TopNavStart className="topNav__start">
        <img src={fbLogo} alt="Facebook Logo" className="topNav__logo" />
        <div className="topNav__search">
          <Search />
          <input
            type="text"
            className="topNav__input"
            placeholder="搜尋 Facebook"
          />
        </div>
      </TopNavStart>
      <TopNavCenter className="topNav__center">
        <div className="topNav__option topNav__option--active">
          <Home fontSize="large" />
        </div>
        <div className="topNav__option">
          <PeopleOutline fontSize="large" />
        </div>
        <div className="topNav__option">
          <OndemandVideo fontSize="large" />
        </div>
        <div className="topNav__option">
          <Storefront fontSize="large" />
        </div>
        <div className="topNav__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </TopNavCenter>
      <TopNavEnd className="topNav__end">
        <div className="topNav__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <div className="topNav__buttonGroup">
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <Forum />
          </IconButton>
          <IconButton>
            <NotificationsActive />
          </IconButton>
          <IconButton>
            <ExpandMore />
          </IconButton>
        </div>
      </TopNavEnd>
    </>
  );
};

export default TopNav;
