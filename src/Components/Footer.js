import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="get_text">
        <div className="get_title">GET IN TOUCH</div>
        <div className="get_smalltext">Sydney, Australia.</div>
      </div>
      <div className="get_fields">
        <div className="get_field_title">GET IN TOUCH</div>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control footer_inputs"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control footer_inputs"
                placeholder="Last name"
              />
            </div>
          </div>
          <textarea className="massage_area" placeholder="Massage"></textarea>
          <button className="dealer_button2">Click to View</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
