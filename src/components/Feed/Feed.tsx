import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../../firebase/config";

const Feed: React.FC = () => {
  type postType = {
    id: string;
    data: firebase.firestore.DocumentData;
  };

  const [posts, setPosts] = useState<postType[]>([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <>
      {posts.map(({ data }) => (
        <Post
          key={data.id}
          profilePic={data.profilePic}
          username={data.username}
          message={data.message}
          image={data.image}
          timestamp={data.timestamp}
        />
      ))}
    </>
  );
};

export default Feed;
