import React from "react";

const Invest = () => {
  return (
    <div className="invest">
      <h3 className="invest_title">INVEST</h3>
      <div className="investment_container">
        <div className="investment_flex">
          <div className="dealer_div">
            <div className="dealer_title">Logan Reserve House & Land</div>
            <div className="dealer_discrption">4 bed 2 bath 2 garage</div>
            <button className="dealer_button">Click to View</button>
          </div>
          <div className="dealer_div">
            <div className="dealer_title">Dual Occupancy Park Ridge</div>
            <div className="dealer_discrption">4 bed 1 bath 1 garage</div>
            <button className="dealer_button">Click to View</button>
          </div>
        </div>
        <div className="next_invest">
          <div className="dealer_div">
            <div className="dealer_title">NDIS Property</div>
            <div className="dealer_discrption">
              SDA Approaved home, Brisbane
            </div>
            <button className="dealer_button">Click to View</button>
          </div>
          <div className="dealer_div">
            <div className="dealer_title">Tarneit, Victoria</div>
            <div className="dealer_discrption">4 bed 2 bath 2 garage</div>
            <button className="dealer_button">Click to View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
