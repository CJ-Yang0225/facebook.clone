import styled from "@emotion/styled";

type StoryWrapperProps = {
  image: string;
};

export const StoryWrapper = styled.div<StoryWrapperProps>`
  position: relative;
  flex-grow: 1;
  height: 200px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props: StoryWrapperProps) => props.image});
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin:0 4px;
  transition: transform 100ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  h4 {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
  }

  .storyReel__avatar {
    margin: 8px;
    border: 4px solid #2e81f4;
  }
`;
