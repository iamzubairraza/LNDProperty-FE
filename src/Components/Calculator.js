import React from "react";
import App from "../App.css";
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
        <button className="start_cal_btn">START CALCULATE</button>
      </div>
      <div className="cal_img">
        <img src="/images/cal_person.svg" />
      </div>
    </div>
  );
};

export default Calculator;
