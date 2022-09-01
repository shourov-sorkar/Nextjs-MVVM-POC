import Axios from "axios";
import { baseUrl } from "../../config/baseUrl";

const COLLECTION = "PostS";

export async function getAll() {
  try {
    let data = await Axios.get(baseUrl + "/posts");
    // console.log(data);
    return Promise.resolve({ error: null, result: data?.data });
  } catch (err) {
    return Promise.resolve({ error: err.message, result: null });
  }
}

export async function getOne(id) {
  try {
    let data = await Axios.get(baseUrl + "/api/v1/post/20");

    return Promise.resolve({
      error: null,
      result: data,
    });
  } catch (err) {
    return Promise.resolve({ error: err.message, result: null });
  }
}

export async function create(PostData) {
  let { title, description } = PostData;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: description,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(JSON.stringify(json))
      console.log(json);
      return json
    })
    .catch((err) => console.log(err));
}

export async function deleteOne(id) {
  console.log(id);
  // let { error, result } = await getAll();
  let data = await Axios.delete(baseUrl + "/posts/" + id);
  console.log(data);
  // let data = result;
  // let deleteIndex = data.indexOf((item) => item.id === id);
  // data.splice(deleteIndex, 1);
  // window.localStorage.setItem(COLLECTION, JSON.stringify(data));
  getAll();
  return Promise.resolve({ error: null, result: true });
}

export async function update(id, PostData) {
  let { error, result } = await getAll();
  let data = result;

  data.forEach((item) => {
    if (item.id === id) {
      item.name = PostData.name;
      item.price = PostData.price;
    }
  });
  window.localStorage.setItem(COLLECTION, JSON.stringify(data));
  return Promise.resolve({ error: null, result: true });
}
