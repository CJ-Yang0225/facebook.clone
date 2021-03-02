import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import {
  MessageSenderContainer,
  RedOption,
  GreenOption,
  OrangeOption,
} from "./MessageSender.styles";

const MessageSender = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMessage("");
    setImageUrl("");
  };

  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <MessageSenderContainer className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="在想些什麼？"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={imageUrl}
            onChange={({ target: { value } }) => setImageUrl(value)}
          />
          <button type="submit" onClick={handleClick}></button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <RedOption>
          <Videocam />
          <h4>直播視訊</h4>
        </RedOption>
        <GreenOption>
          <PhotoLibrary />
          <h4>相片 / 影片</h4>
        </GreenOption>
        <OrangeOption>
          <InsertEmoticon />
          <h4>感受 / 活動</h4>
        </OrangeOption>
      </div>
    </MessageSenderContainer>
  );
};

export default MessageSender;
