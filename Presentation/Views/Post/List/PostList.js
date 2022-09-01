import React, { useEffect } from "react";
import useViewModel from "./ViewModel";
import List from "../../../components/List";
import Button from "../../../components/Button";
import { useRouter } from "next/router";

export default function PostList() {
  let router = useRouter();
  const { Posts, getPosts, goToAddPost, goToPostDetail } = useViewModel();

  useEffect(() => {
    getPosts();
  }, []);

  console.log(Posts);

  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <h2>Post List</h2>
        <Button title={"Add New Post"}   onClick={() => router.push("/post/new")}/>
      </div>
      <List
        data={Posts}
        onRowClick={(id) => router.push(`/Post/detail/${id}`)}
      />
    </div>
  );
}
