import { useState } from "react";
import { GetPostUseCase } from "../../../../Domain/UseCase/Post/GetPost";
import { UpdatePostUseCase } from "../../../../Domain/UseCase/Post/UpdatePost";
import { DeletePostUseCase } from "../../../../Domain/UseCase/Post/DeletePost";

export default function PostDetailViewModel() {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    id: null,
    name: "",
    price: 0,
  });

  async function getPost(id) {
    const { result, error } = await GetPostUseCase(id);
    setError(error);
    setValues({ ...result });
  }

  function onChange(value, prop) {
    setValues({ ...values, [prop]: value });
  }

  async function updatePost(id) {
    const { result, error } = await UpdatePostUseCase(id, values);
    setError(error);
  }

  async function deletePost(id) {
    const { result, error } = await DeletePostUseCase(id);
    setError(error);
  }

  return {
    error,
    deletePost,
    updatePost,
    getPost,
    onChange,
    ...values,
  };
}
