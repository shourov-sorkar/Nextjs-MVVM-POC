import { createPost } from "../../../Data/Repository/PostRepository";
export async function CreatePostUseCase(PostData) {
  return await createPost(PostData);
}
