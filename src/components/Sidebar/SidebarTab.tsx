import { Avatar } from "@material-ui/core";
import React from "react";

export type SidebarTabProps = {
  title: string;
  src: string | null;
  Icon: any | null;
};

const SidebarTab: React.FC<SidebarTabProps> = ({ title, src, Icon }) => {
  return (
    <div className="sidebar__tab">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarTab;
