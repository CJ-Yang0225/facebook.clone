import React from "react";

// Material-UI
import {
  DateRange,
  ExpandMore,
  History,
  OndemandVideo,
  People,
  Storefront,
  SupervisedUserCircle,
} from "@material-ui/icons";

// Components
import SidebarTab from "./SidebarTab";

// Context
import { useUserContext } from "../ContextProvider/ContextProvider";

const Sidebar: React.FC = () => {
  const [{ user }, dispatch] = useUserContext();
  console.log(user);

  return (
    <div className="sidebar">
      <SidebarTab title={user.displayName} src={user.photoURL} />
      <SidebarTab title="朋友" Icon={People} />
      <SidebarTab title="社團" Icon={SupervisedUserCircle} />
      <SidebarTab title="Marketplace" Icon={Storefront} />
      <SidebarTab title="Watch" Icon={OndemandVideo} />
      <SidebarTab title="活動" Icon={DateRange} />
      <SidebarTab title="動態回顧" Icon={History} />
      <SidebarTab title="顯示更多" Icon={ExpandMore} />
    </div>
  );
};

export default Sidebar;
