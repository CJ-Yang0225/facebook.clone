import React, { useState } from "react";
import {
  TopNavContainer,
  TopNavStart,
  TopNavCenter,
  TopNavEnd,
} from "./styles/TopNav.styles";
import {
  Search,
  Home,
  PeopleOutline,
  OndemandVideo,
  Storefront,
  SupervisedUserCircle,
  AccountCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import fbLogo from "../images/f_logo_RGB-Hex-Blue_512.png";

type HeaderProps = {};

const TopNav: React.FC<HeaderProps> = () => {
  return (
    <TopNavContainer>
      <TopNavStart>
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
      <TopNavCenter>
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
      <TopNavEnd>
        <div className="topNav__info">
          <AccountCircle fontSize="large" />
          <h4>Jerold Yang</h4>
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
    </TopNavContainer>
  );
};

export default TopNav;
