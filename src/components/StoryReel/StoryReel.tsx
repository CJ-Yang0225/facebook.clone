import React from "react";
import Story from "./Story";

// Styles
import { StoryReelContainer } from "./StoryReel.styles";

// Story images
import ki_kd from "../../images/story/ki_kd.jpg";
import kb24 from "../../images/story/kb24.jpg";
import lbj23 from "../../images/story/lbj23.jpg";
import whoWillWin from "../../images/story/who_will_win.jpg";
import sc30 from "../../images/story/sc30.jpg";

// Story profile
import nba from "../../images/story/nba.jpg";
import espn from "../../images/story/espn.jpg";
import br from "../../images/story/br.jpg";


const StoryReel: React.FC = () => {
  return (
    <StoryReelContainer className="storyReel">
      <Story profileSrc={nba} title="Who will win?" image={whoWillWin} />
      <Story profileSrc={espn} title="KI & KD" image={ki_kd} />
      <Story profileSrc={nba} title="Mamba Forever" image={kb24} />
      <Story profileSrc={br} title="Stephen Curry" image={sc30} />
      <Story profileSrc={nba} title="LeBron James" image={lbj23} />
    </StoryReelContainer>
  );
};

export default StoryReel;
