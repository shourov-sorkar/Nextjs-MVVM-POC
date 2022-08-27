import { Button } from "react-bootstrap";

export default function List({ onClick, title }) {
  return (
    <Button variant="primary" onClick={onClick}>
      {title}
    </Button>
  );
}
