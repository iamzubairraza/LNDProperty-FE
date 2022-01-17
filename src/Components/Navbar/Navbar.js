import React, { useState } from "react";
import "./Navbar.css";
import Account from "./Account";
import { Link } from "react-router-dom";
import { Dropdown, Modal, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showheader, setShowheader] = useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Modal
        show={showModal}
        // size="lg"
        onHide={() => {
          setShowModal(false);
          setShowheader(true);
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="">
            <div className="bloc-tabs">
              <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Login
              </div>
              <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Sign Up
              </div>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
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

                  <button className="loginbtn" type="submit">
                    LOGIN
                  </button>
                </Form>
                <p className="already_account">
                  Already have an Account ?
                  <Link to="/account">
                    <span className="already_span">CREATE ACCOUNT</span>
                  </Link>
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <Account />
                {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                      <div className="input_label">
                        Looking for house or Investment
                      </div>
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
                </Form> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="main_nav">
        <div className="Navbar">
          <img className="intestlogo" src="/images/investlogo.svg" />
          {/* <span className="nav-logo">DevLHB</span> */}
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/home">Home</Link>
            <a href="/saveditems">Saved items</a>
            <Link to="/about">About</Link>
            <a to="/login">Contact Us</a>
            <a href="/contact">Login</a>
            <button
              onClick={() => {
                setShowModal(true);
                setShowheader(false);
              }}
              className="creat_accout"
            >
              Create account
            </button>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
