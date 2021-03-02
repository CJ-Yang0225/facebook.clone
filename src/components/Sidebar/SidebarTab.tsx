import React from "react";
import { Avatar } from "@material-ui/core";
import { SidebarTabWrapper } from "./SidebarTab.styles";

export type SidebarTabProps = {
  title: string;
  src: string | null;
  Icon: any | null;
};

const SidebarTab: React.FC<SidebarTabProps> = ({ title, src, Icon }) => {
  return (
    <SidebarTabWrapper className="sidebar__tab">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </SidebarTabWrapper>
  );
};

export default SidebarTab;
