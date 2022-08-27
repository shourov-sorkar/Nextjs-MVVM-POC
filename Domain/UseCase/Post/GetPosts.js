import { getPosts } from "../../../Data/Repository/PostRepository";
export async function GetPostsUseCase() {
  return await getPosts();
}
