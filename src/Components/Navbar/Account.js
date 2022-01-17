import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Account = () => {
  //   const [checked1, setChecked1] = React.useState(false);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 ">
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">FULL NAME</div>
            <input
              className="signup_inputs abc"
              type="text"
              placeholder="Last Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Last name is Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">EMAIL ADDRESS</div>
            <input
              className="signup_inputs abc"
              type="Email"
              placeholder="Email Address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is Required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">PHONE NUMBER</div>
            <input
              className="signup_inputs abc"
              type="tel"
              placeholder="Enter Phone Number"
              required
            />
            <Form.Control.Feedback type="invalid">
              Phone Number is Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">Looking for house or Investment</div>
            <input
              className="signup_inputs abc"
              type="text"
              placeholder="House or Investment"
              required
            />
            <Form.Control.Feedback type="invalid">
              House or Investment is Required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">PASSWORD</div>
            <input
              className="signup_inputs abc"
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is Required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">Current State</div>
            <input
              className="signup_inputs abc"
              type="tel"
              placeholder="Enter State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Current State is Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom03">
            <div className="input_label">Budget</div>
            <input
              className="signup_inputs abc"
              type="text"
              placeholder="Enter Budget"
              required
            />
            <Form.Control.Feedback type="invalid">
              Budget is Required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <button className="loginbtn" type="submit">
          CREATE ACCOUNT
        </button>
      </Form>
    </div>
  );
};

export default Account;
