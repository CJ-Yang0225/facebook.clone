import React from "react";
import { Avatar } from "@material-ui/core";
import { StoryWrapper } from "./Story.styles";

export type StoryProps = {
  profileSrc: string;
  title: string;
  image: string;
};

const Story: React.FC<StoryProps> = ({ profileSrc, title, image }) => {
  return (
    <StoryWrapper image={image} className="storyReel__item">
      <Avatar src={profileSrc} className="storyReel__avatar" />
      <h4>{title}</h4>
    </StoryWrapper>
  );
};

export default Story;
