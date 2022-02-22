import React from "react";

const Cashdetails = () => {
  return (
    <>
      <div className="cash_div">
        <div className="cash_details">
          <div className="cash req">
            <h5 className="cash_title">Cash Required</h5>
            <div className="cash_flex">
              <div className="cash_flex_title">DEPOSIT</div>
              <div className="price2">5%</div>
              <div className="price">$25</div>
            </div>
            <div className="cash_flex2">
              <div className="cash_flex_title">STAMP DUTY</div>
              <div className="price">$25</div>
            </div>
            <button className="cashbtn">$487</button>
          </div>
        </div>
        <div className="cash_details">
          <div className="cash req">
            <h5 className="cash_title">LOAN BALANCE</h5>
            <div className="cash_flex">
              <div className="cash_flex_title">PURCHASE PRICE</div>
              <div className="price">$500</div>
            </div>
            <div className="cash_flex2">
              <div className="cash_flex_title">Less : Deposit</div>
              <div className="price">$25</div>
            </div>
            <div className="cash_flex2">
              <div className="cash_flex_title">ADD : LMI</div>
              <div className="price">$25</div>
            </div>
            <button className="cashbtn">$12</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashdetails;
