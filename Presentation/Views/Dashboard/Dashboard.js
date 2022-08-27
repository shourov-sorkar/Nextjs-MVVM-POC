import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/post/postlist")}>Hello World!</Button>
    </div>
  );
}
