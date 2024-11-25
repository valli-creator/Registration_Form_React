import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Form, Container, Row, Col, Card, Alert } from "react-bootstrap";
function FormSample() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [gender, setGender] = useState("");
  let [selectedOptions, setSelectedOptions] = useState({
    Languages: [],
    Location: "",
  });
  const [error, setError] = useState("");

  const printValues = (e) => {
    e.preventDefault();
    if (!data.password) {
      setError("Password is required!");
      return;
    }
    setError("");
    setForm({
      ...data,
      gender, // Add gender to the form state
    });
    setSubmit(true);
  };

  const updateValues = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions((prev) => {
      const Languages = checked
        ? [...prev.Languages, value] // Add language if checked
        : prev.Languages.filter((item) => item !== value); // Remove language if unchecked
      return { ...prev, Languages }; // Return updated state
    });
  };
  const handleLocationChange = (e) => {
    setSelectedOptions((prev) => ({
      ...prev,
      Location: e.target.value, // Update location
    }));
  };
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="p-4 shadow">
              <h1 className="text-center mb-4" style={{ color: "green" }}>
                Registration Form
              </h1>

              <Form onSubmit={printValues}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={data.username}
                    name="username"
                    onChange={updateValues}
                  />
                  {error && <Alert variant="danger">{error}</Alert>}
                </Form.Group>
                <br />
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={data.password}
                    name="password"
                    onChange={updateValues}
                    required
                  />
                  <Form.Text
                    id="passwordHelp"
                    className="text-danger"
                    plaintext
                  >
                    Hey! Your password should be secure and unique.
                  </Form.Text>
                </Form.Group>
                <br />
                <label>Choose Gender: &nbsp; </label>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  onChange={handleGenderChange} // Handle change
                  checked={gender === "Male"} // Manage checked state
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  onChange={handleGenderChange} // Handle change
                  checked={gender === "Female"}
                />
                <br />
                <label>Languages known: &nbsp; </label>
                {["Java", "C++", "C#", "C", "Phyton", "JavaScript"].map(
                  (lang) => (
                    <Form.Check
                      key={lang}
                      type="checkbox"
                      label={lang}
                      value={lang}
                      onChange={handleLanguageChange}
                    />
                  )
                )}
                <br />
                Choose your Location:
                <Form.Select
                  value={selectedOptions.Location}
                  onChange={handleLocationChange}
                >
                  <option value="">Select any Location</option>
                  <option value="india">India</option>
                  <option value="uk">UK</option>
                  <option value="usa">USA</option>
                  <option value="china">China</option>
                  <option value="france">France</option>
                </Form.Select>
                <br />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>

        {submit && (
          <div>
            <h2>Form Details:</h2>
            <p>UserName: {form.username}</p>
            <p>Password: {form.password}</p>
            <p>Gender: {form.gender}</p>
            <p>
              Languages known: {selectedOptions.Languages.join(", ") || "None"}
            </p>
            <p>Current Location: {selectedOptions.Location || "None"}</p>
          </div>
        )}
      </Container>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormSample />);
