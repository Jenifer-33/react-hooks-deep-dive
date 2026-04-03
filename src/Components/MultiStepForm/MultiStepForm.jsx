import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Display from "./Display";
import { Card, Container } from "react-bootstrap";
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    country: "",
    state: "",
    phone: "",
  });

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "420px" }} className="shadow p-3">
        {step == 1 && (
          <StepOne form={form} setForm={setForm} setStep={setStep} />
        )}

        {step == 2 && (
          <StepTwo
            form={form}
            setForm={setForm}
            setStep={setStep}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            setSelectedStates={setSelectedStates}
            selectedStates={selectedStates}
          />
        )}
        {step == 3 && (
          <Display
            form={form}
            setForm={setForm}
            setStep={setStep}
            selectedCountry={selectedCountry}
            selectedStates={selectedStates}
          />
        )}
      </Card>
    </Container>
  );
};
export default MultiStepForm;
