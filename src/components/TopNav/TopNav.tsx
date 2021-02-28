import React, { useState } from "react";
import {
  TopNavContainer,
  TopNavStart,
  TopNavCenter,
  TopNavEnd,
} from "./TopNav.styles";
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
import fbLogo from "../../images/f_logo_RGB-Hex-Blue_512.png";

const TopNav: React.FC = () => {
  return (
    <TopNavContainer className="topNav">
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
