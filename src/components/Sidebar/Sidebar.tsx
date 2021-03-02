import React from "react";
import SidebarTab from "./SidebarTab";
import {
  DateRange,
  ExpandMore,
  GitHub,
  History,
  OndemandVideo,
  People,
  Storefront,
  SupervisedUserCircle,
} from "@material-ui/icons";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <SidebarTab title="CJ-Yang0225" src="" Icon={GitHub} />
      <SidebarTab title="朋友" src="" Icon={People} />
      <SidebarTab title="社團" src="" Icon={SupervisedUserCircle} />
      <SidebarTab title="Marketplace" src="" Icon={Storefront} />
      <SidebarTab title="Watch" src="" Icon={OndemandVideo} />
      <SidebarTab title="活動" src="" Icon={DateRange} />
      <SidebarTab title="動態回顧" src="" Icon={History} />
      <SidebarTab title="顯示更多" src="" Icon={ExpandMore} />
    </div>
  );
};

export default Sidebar;
