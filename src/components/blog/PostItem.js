import React from "react";
import { Link } from "gatsby";
import {
  postWrapper,
  postTitle,
  postTime,
  postContent,
} from "./PostItem.module.css";
import moment from "moment";

const PostItem = ({ node }) => {
  return (
    <Link className={postTitle} to={`/blog/${node.slug}`} key={node.id}>
      <article className={postWrapper}>
        <h2 className={postTitle}>{node.frontmatter.title}</h2>
        <p className={postContent}>{node.excerpt}</p>
        <p className={postTime}>
          {moment(node.frontmatter.date).format("MMM DD, YYYY")}
        </p>
      </article>
    </Link>
  );
};

export default PostItem;
