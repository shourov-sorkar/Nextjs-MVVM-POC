import { useState } from "react";
import { GetPostsUseCase } from "../../../../Domain/UseCase/Post/GetPosts";

export default function PostNewViewModel() {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    price: 0,
  });

  function onChange(value, prop) {
    setValues({ ...values, [prop]: value });
  }

  async function savePost() {
    const { result, error } = await GetPostsUseCase(values);
    setError(error);
  }

  return {
    ...values,
    error,
    onChange,
    savePost,
  };
}
