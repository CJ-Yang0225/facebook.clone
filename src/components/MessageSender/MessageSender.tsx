import React, { useState } from "react";

// Material-UI
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";

// Styled
import {
  MessageSenderContainer,
  RedOption,
  GreenOption,
  OrangeOption,
} from "./MessageSender.styles";

// Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../../firebase/config";

// Context
import { useUserContext } from "../ContextProvider/ContextProvider";

const MessageSender: React.FC = () => {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useUserContext();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMessage("");
    setImageUrl("");

    db.collection("posts").add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
  };

  return (
    <MessageSenderContainer className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder={`${user.displayName}，在想些什麼？`}
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
