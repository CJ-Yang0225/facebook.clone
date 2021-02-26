import { Avatar, SvgIconProps } from "@material-ui/core";
import React from "react";

export type SidebarRowProps = {
  title: string;
  src: string | null;
  Icon: any | null;
};

const SidebarRow: React.FC<SidebarRowProps> = ({ title, src, Icon }) => {
  return (
    <div className="sidebar__row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
