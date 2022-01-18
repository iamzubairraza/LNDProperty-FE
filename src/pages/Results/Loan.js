import React from "react";

const Loan = () => {
  return (
    <div className="loan_payment">
      <div className="flex_loan">
        <div className="loan_div">
          <h3 className="loan_title">LOAN PAYMENTS</h3>
          <div className="loan_payment_title">INTEREST RATE</div>
          <button className="loanbtn">$487</button>
        </div>
      </div>
      <div className="loan_div">
        <div className="loan_payment_title">LOAN TERM</div>
        <button className="loanbtn">$121</button>
      </div>
    </div>
  );
};

export default Loan;
