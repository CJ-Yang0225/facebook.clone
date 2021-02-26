import React from "react";
import { SidebarWrapper } from "./styles/Sidebar.styles";
import SidebarRow from "./SidebarRow";
import {
  AccountCircle,
  DateRange,
  ExpandMore,
  GitHub,
  History,
  OndemandVideo,
  People,
  Storefront,
  SupervisedUserCircle,
  VideoLibrary,
} from "@material-ui/icons";

export type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <SidebarWrapper className="sidebar">
      <SidebarRow title="CJ-Yang0225" src="" Icon={GitHub} />
      <SidebarRow title="朋友" src="" Icon={People} />
      <SidebarRow title="社團" src="" Icon={SupervisedUserCircle} />
      <SidebarRow title="Marketplace" src="" Icon={Storefront} />
      <SidebarRow title="Watch" src="" Icon={OndemandVideo} />
      <SidebarRow title="活動" src="" Icon={DateRange} />
      <SidebarRow title="動態回顧" src="" Icon={History} />
      <SidebarRow title="顯示更多" src="" Icon={ExpandMore} />
    </SidebarWrapper>
  );
};

export default Sidebar;
