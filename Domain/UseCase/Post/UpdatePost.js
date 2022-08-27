import { updatePost } from "../../../Data/Repository/PostRepository";
export async function UpdatePostUseCase(id, PostData) {
  return await updatePost(id, PostData);
}
