import React, { useEffect } from "react";
import useViewModel from "./ViewModel";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";

export default function PostDetail() {
  let router = useRouter();
  let { id } = useParams();
  const { name, price, getPost, onChange, updatePost, deletePost } =
    useViewModel();

  useEffect(() => {
    getPost(id);
  }, []);

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
        <h2>Edit Post</h2>
        <div style={{ display: "flex" }}>
          <Button
            title="Delete"
            onClick={() => {
              deletePost(id);
              router.push(-1);
            }}
          />

          <Button
            title="Update"
            onClick={() => {
              updatePost(id);
              router.push(-1);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
        <TextInput
          placeholder="Post Name"
          autoFocus={true}
          value={name}
          onChange={(e) => onChange(e.target.value, "name")}
        />
        <TextInput
          placeholder="Post Price"
          type="number"
          value={price}
          onChange={(e) => onChange(e.target.value, "price")}
        />
      </div>
    </div>
  );
}
