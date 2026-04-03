import { Form, Button } from "react-bootstrap";
import dropDown from "./dropDownDate";
const StepTwo = ({
  form,
  setForm,
  setStep,
  setSelectedStates,
  selectedStates,
}) => {
  // const handleCountryChange=(e)=>{
  //     const selectedCountry=e.target.value
  //     setSelectedCountry(selectedCountry);
  //     const country=dropDown.find((item)=>item.country==selectedCountry);
  //     setSelectedStates(country?country.states:[])
  // }
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;

    setForm({
      ...form,
      country: selectedCountry,
      state: "",
    });

    const countryName = dropDown.find(
      (item) => item.country === selectedCountry,
    );

    setSelectedStates(countryName ? countryName.states : []);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <p>Step 2:</p>
      <h3>Contact Details:</h3>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Mail Id"
          value={form.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <select
          name="country"
          value={form.country}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {dropDown.map((item) => (
            <option key={item.country} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>
      </Form.Group>
      <Form.Group className="mb-3">
        <select
          name="state"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
          disabled={!form.country}
        >
          <option value="">Select State</option>
          {selectedStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </Form.Group>
      <Button onClick={() => setStep(1)}>Back</Button>
      <Button className="mx-3" onClick={() => setStep(3)}>
        Next
      </Button>
    </div>
  );
};
export default StepTwo;
