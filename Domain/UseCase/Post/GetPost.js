import { getPost } from "../../../Data/Repository/PostRepository";
export async function GetPostUseCase(id) {
  return await getPost(id);
}
