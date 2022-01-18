import React, { useState } from "react";
import Listresult from "./Listresult";

const Saveresult = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="save_result_items">
      <div className="bloc-tabs loan_tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          PRINCIPLE & INTEREST
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          INTEREST ONLY
        </button>
      </div>

      <div className="">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Listresult />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        ></div>
      </div>
    </div>
  );
};

export default Saveresult;
