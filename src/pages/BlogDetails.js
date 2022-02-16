import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { error, isLoading, blogs } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete =() => {
    fetch("http://localhost:8000/blogs" + blogs.id, {
      method: "DELETE"
    }).then(()=> {
      navigate("/")
    })
  }

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {
        <article className="w-50 mx-auto bg-dark text-white my-3 p-5">
            <p> Post Id: {blogs.postId}</p>
            <h6>Id: {blogs.id}</h6>
          <h3>Author: {blogs.name}</h3>
          <p>Description: {blogs.body}</p>
          <button onClick={handleDelete} className="btn btn-white rounded bg-white" >Delete</button>
        </article>
      }
    </div>
  );
};

export default BlogDetails;
