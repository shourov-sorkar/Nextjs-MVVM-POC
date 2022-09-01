import {
  create,
  update,
  getAll,
  getOne,
  deleteOne,
} from "../DataSource/PostDataHandler";

export async function createPost(data) {
  const result = await create(data);
  return result;
}

export async function deletePost(id) {
  const { result, error } = await deleteOne(id);
  return { result, error };
}

export async function updatePost(id, data) {
  const { result, error } = await update(id, data);
  return { result, error };
}

export async function getPosts() {
  const { result, error } = await getAll();
  return { result, error };
}

export async function getPost(id) {
  const { result, error } = await getOne(id);
  return { result, error };
}
