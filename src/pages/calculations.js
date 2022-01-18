import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const calculations = () => {
  return (
    <div>
      <Navbar />
      <h5 className="calculations_heading">
        PLEASE SELECT PROPERTY OPTIONS TO CALCULATE INVESTMENTS
      </h5>
      <h4 className="state_title">STATE</h4>
      <div className="state">
        <Row className="mb-3 state_div">
          <button className="statebtn">NSW</button>
          <button className="statebtn">ACT</button>
          <button className="statebtn">NT</button>
          <button className="statebtn">QLD</button>
        </Row>

        <Row className="mb-3 state_div">
          <button className="statebtn">SA</button>
          <button className="statebtn">VIC</button>
          <button className="statebtn">WA</button>
          <button className="statebtn">TAS</button>
        </Row>
      </div>
      <div className="www">
        <div>
          <h4 className="state_title">PURPOSE OF PROPERTY</h4>
          <div className="PURPOSE_PROPERTY">
            <div className="">
              <button className="purposebtn">LIVE</button>
              <button className="purposebtn">INVEST</button>
            </div>
          </div>
        </div>
        <div>
          <h4 className="state_title">FIRST HOME OWNER</h4>
          <div className="PURPOSE_PROPERTY">
            <div className="">
              <button className="purposebtn">YES</button>
              <button className="purposebtn">NO</button>
            </div>
          </div>
        </div>
      </div>
      <div className="www">
        <div>
          <h4 className="state_title">DEPOSIT</h4>
          <div className="PURPOSE_PROPERTY">
            <div className="">
              <button className="purposebtn">CASH</button>
              <button className="purposebtn">EQUITY</button>
            </div>
          </div>
        </div>
        <div>
          <h4 className="state_title">CALCULATE LMI ?</h4>
          <div className="PURPOSE_PROPERTY">
            <div className="">
              <button className="purposebtn">YES</button>
              <button className="purposebtn">NO</button>
            </div>
          </div>
        </div>
      </div>
      <div className="www">
        <div>
          <h4 className="state_title">TYPE OF PROPERTY</h4>
          <div className="PURPOSE_PROPERTY">
            <div className="flex_div">
              <button className="purposebtn">ESTABLISHED</button>
              <button className="purposebtn">NEW HOME</button>
              <button className="purposebtn">LAND</button>
              <div className="pricebtn">
                <div className="doller">$</div>
                <button className="purposebtn dollerbtn">2000</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="PURPOSE_PROPERTY"></div>
        </div>
      </div>
      <div className="total">
        <Link to="/results">
          <button className="rusltbtn purposebtn">RESULTS</button>
        </Link>
        <button className="clear">CLEAR</button>
      </div>
    </div>
  );
};

export default calculations;
