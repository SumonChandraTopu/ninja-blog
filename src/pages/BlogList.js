import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blog }) => {
  return (
    <div>
      <div className="container">
        <Link to={`/blogs/${blog.id}`}>
          <h4>{blog.name}</h4>
          <h6>{blog.email}</h6>
          <p>{blog.body}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
