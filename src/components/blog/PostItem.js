import React from "react";
import { Link } from "gatsby";
import {
  postWrapper,
  postTitle,
  postTime,
  postContent,
} from "./PostItem.module.css";
import moment from "moment";

const PostItem = ({ node, key }) => {
  return (
    <Link className={postTitle} to={`/blog/${node.slug}`}>
      <article className={postWrapper} key={key}>
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
