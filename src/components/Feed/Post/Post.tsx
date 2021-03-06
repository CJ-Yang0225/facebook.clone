import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import { PostContainer } from "./Post.styles";

type PostProps = {
  profilePic: string;
  username: string;
  message: string;
  image?: string;
  timestamp: any;
};

const Post: React.FC<PostProps> = ({
  profilePic,
  username,
  message,
  image,
  timestamp,
}) => {
  return (
    <PostContainer className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__center">
        <p>{message}</p>
        <div className="post__image">
          {image && <img src={image} alt="imgURL" />}
        </div>
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <ThumbUp />
          <p>讚</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>留言</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>分享</p>
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
