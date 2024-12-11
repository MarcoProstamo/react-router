import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPostPage() {
  const { id: postId } = useParams();
  const [post, setPost] = useState(null);

  const indexUrl = import.meta.env.VITE_POSTS_INDEX;
  function fetchPost(postId) {
    fetch(indexUrl + `/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }

  useEffect(() => {
    fetchPost(postId);
  }, []);

  return (
    post && (
      <div>
        <h1>Post Details</h1>
        <ul>
          <li>
            <strong>Title:</strong> {post.title}
          </li>
          <li>
            <strong>Author:</strong> {post.author}
          </li>
          <li>
            <strong>Content:</strong> {post.content}
          </li>
          <li>
            <strong>Category:</strong> {post.category}
          </li>
          <li>
            <strong>Public:</strong> {post.isPublic ? "Yes" : "No"}
          </li>
          <li>
            <strong>Tags:</strong> {post.tags.join(", ")}
          </li>
          <li>
            <strong>Image:</strong>
            <img src={post.image} alt="😢" className="ms-1" width="100" />
          </li>
        </ul>
      </div>
    )
  );
}
