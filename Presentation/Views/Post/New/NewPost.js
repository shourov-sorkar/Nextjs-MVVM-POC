import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { CreatePostUseCase } from "../../../../Domain/UseCase/Post/CreatePost";
import Button from "../../../components/Button";
import { useRouter } from "next/router";

const NewPost = () => {
  const router = useRouter();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
  });
  const formDataHandler = async (e) => {
    e.preventDefault();
    await CreatePostUseCase(postData);
    setPostData({ title: "", description: "" });
    console.log(postData);
    // router.push("/");
  };
  const onChangeHandler = (e) => {
    let data = {};
    data[e.target.name] = e.target.value;
    setPostData({ ...postData, ...data });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="mx-auto mt-5" md={8}>
            <Card className="p-4">
              <h2 className="text-center pb-4">Create New Post</h2>
              <Form onSubmit={formDataHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Title*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    onChange={onChangeHandler}
                    value={postData.title}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    onChange={onChangeHandler}
                    value={postData.description}
                  />
                </Form.Group>

                <Button
                  onClick={formDataHandler}
                  variant="primary"
                  type={"submit"}
                  title="Create Post"
                />
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewPost;
