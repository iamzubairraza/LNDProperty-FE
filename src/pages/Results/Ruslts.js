import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Cashdetails from "./Cashdetails";
import Loan from "./Loan";
import Saveresult from "./Saveresult";
const Ruslts = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <Navbar />
      <h3 className="ruslt_title">RESULTS</h3>
      <div className="results_tabs">
        <div className="bloc-tabs bloc-tabs-width">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            5% DEPOSIT
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            10% DEPOSIT
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            15% DEPOSIT
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            My Cash
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Cashdetails />
            <Loan />
            <Saveresult />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <h2>Content 4</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruslts;
