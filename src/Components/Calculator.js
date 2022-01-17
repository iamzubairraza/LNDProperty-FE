import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Calculator = () => {
  return (
    <div className="calculator">
      <div className="cal_data">
        <h2 className="cal_tittle">YOUR PROPERTY OUR CALCULATOR</h2>
        <p className="cal_prah">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris,
          turpis faucibus amet, lobortis dolor turpis et lectus. Sed urna mattis
          porttitor est. Lorem id netus integer pellentesque. Vitae id in ac
          lacus arcu velit amet justo, lacus. Turpis amet praesent venenatis
          tortor. Viverra in tincidunt suscipit suspendisse morbi erat cursus.
        </p>
        <Link to="/calculations">
          <button className="start_cal_btn">Start Calculate</button>
        </Link>
      </div>
      <div className="cal_img">
        <img src="/images/cal_person.svg" alt="" />
      </div>
    </div>
  );
};

export default Calculator;
