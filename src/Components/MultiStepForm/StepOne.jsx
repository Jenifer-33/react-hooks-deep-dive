import { Form, Button } from "react-bootstrap";
const StepOne = ({ form, setForm, setStep }) => {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <p>Step 1:</p>
      <h3>Personal Details:</h3>
      <Form.Group className="mb-3">
        <Form.Control
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          name="age"
          placeholder="Enter Age"
          value={form.age}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mx-2">Gender:</Form.Label>
        <Form.Check
          inline
          className="me-2"
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender == "Male"}
          onChange={handleChange}
        />
        Male
        <Form.Check
          inline
          className="me-2 ms-2"
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender == "Female"}
          onChange={handleChange}
        />
        Female
        <Form.Check
          inline
          className="me-2 ms-2"
          type="radio"
          name="gender"
          value="Others"
          checked={form.gender == "Others"}
          onChange={handleChange}
        />
        Others
      </Form.Group>
      <Button onClick={() => setStep(2)}>Next</Button>
    </div>
  );
};
export default StepOne;
