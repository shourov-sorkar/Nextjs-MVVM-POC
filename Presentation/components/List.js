import { Button, Table } from "react-bootstrap";
import { DeletePostUseCase } from "../../Domain/UseCase/Post/DeletePost";

export default function List({ data = [], onRowClick }) {
  return (
    <div style={{ padding: 20 }}>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <th>
                    <Button
                      onClick={() => DeletePostUseCase(item.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
