import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="rafehQazi"
          src="/static/images/avatar/1.jpg"
        ></Avatar>
        <h3>{username}</h3>
      </div>

      {/* Header --> avatar + username */}

      <img className="post__image" src={imageUrl} alt="" />

      {/* image */}
      <h4 className="post__text">
        {" "}
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
