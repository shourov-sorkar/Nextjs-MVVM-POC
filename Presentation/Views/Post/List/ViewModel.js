import { useState } from "react";
import { GetPostsUseCase } from "../../../../Domain/UseCase/Post/GetPosts";

export default function PostListViewModel() {
  const [error, setError] = useState("");
  const [Posts, setPosts] = useState([]);

  async function getPosts() {
    const { result, error } = await GetPostsUseCase();
    setError(error);
    setPosts(result);
  }
  return {
    error,
    getPosts,
    Posts,
  };
}
