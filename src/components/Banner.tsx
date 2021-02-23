import React, { useState } from "react";
import {
  BannerContainer,
  BannerStart,
  BannerCenter,
  BannerEnd,
} from "./styles/Banner.styles";
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

const Banner: React.FC<HeaderProps> = () => {
  return (
    <BannerContainer>
      <BannerStart>
        <img src={fbLogo} alt="Facebook Logo" className="banner__logo" />
        <div className="banner__search">
          <Search />
          <input
            type="text"
            className="banner__input"
            placeholder="搜尋 Facebook"
          />
        </div>
      </BannerStart>
      <BannerCenter>
        <div className="banner__option banner__option--active">
          <Home fontSize="large" />
        </div>
        <div className="banner__option">
          <PeopleOutline fontSize="large" />
        </div>
        <div className="banner__option">
          <OndemandVideo fontSize="large" />
        </div>
        <div className="banner__option">
          <Storefront fontSize="large" />
        </div>
        <div className="banner__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </BannerCenter>
      <BannerEnd>
        <div className="banner__info">
          <AccountCircle fontSize="large" />
          <h4>Jerold Yang</h4>
        </div>
        <div className="banner__buttonGroup">
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
      </BannerEnd>
    </BannerContainer>
  );
};

export default Banner;
