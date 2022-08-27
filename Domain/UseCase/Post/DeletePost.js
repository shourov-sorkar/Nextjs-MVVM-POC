import { deletePost } from "../../../Data/Repository/PostRepository";
export async function DeletePostUseCase(id) {
  return await deletePost(id);
}
