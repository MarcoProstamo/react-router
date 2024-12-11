import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const indexUrl = import.meta.env.VITE_POSTS_INDEX;

  function fetchPosts() {
    fetch(indexUrl)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row gap-2">
      {posts
        .filter((post) => post.isPublic)
        .map((post) => (
          <div key={post.id} className="col card p-0">
            <img src={post.image} className="card-img-top" alt="😢" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text flex-grow-1">{post.content}</p>
              <Link to={`/posts/${post.id}`} className="btn btn-primary">
                See More...
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
