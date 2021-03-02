import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://thumbs.dreamstime.com/b/breaking-news-logo-vector-available-png-breaking-news-logo-vector-128732621.jpg"></img>
     {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
