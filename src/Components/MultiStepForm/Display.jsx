import { ListGroup, Button } from "react-bootstrap";
const Display = ({ form, setStep }) => {
  return (
    <div>
      <ListGroup className="mb-3">
        <ListGroup.Item>Name: {form.name}</ListGroup.Item>
        <ListGroup.Item>Age: {form.age}</ListGroup.Item>
        <ListGroup.Item>Gender: {form.gender}</ListGroup.Item>
        <ListGroup.Item>Email: {form.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {form.phone}</ListGroup.Item>
        <ListGroup.Item>Country: {form.country}</ListGroup.Item>
        <ListGroup.Item>State: {form.state}</ListGroup.Item>
      </ListGroup>
      <Button className="mx-3" onClick={() => setStep(2)}>
        Back
      </Button>
      <Button
        variant="success"
        onClick={() => alert("Form submitted successfully")}
      >
        Submit
      </Button>
    </div>
  );
};
export default Display;
