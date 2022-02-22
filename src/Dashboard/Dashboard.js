import "./Dashboard.css";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Dashboard = ({ history }) => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div>
      <div className="div2">
        <div className="sidebar d-none d-md-block">
          <img alt="" className="logoimg" src="/imgs/crowin.svg" />
          <img src="/images/investlogo.svg" alt="" />
          <div className="calender">
            <div id="calenderbtn">
              <img alt="" src="/imagee/calenderr.svg" />
              <label className="lebalapp">Team Manage</label>
            </div>
          </div>
        </div>
        <div
          className={
            open ? "sidebar secondside sidebarActive" : "sidebar secondside "
          }
          id="secondside"
        >
          <img
            className="close"
            id="close"
            onClick={() => setOpen((prev) => !prev)}
            src="/images/close.svg"
            alt=""
          />

          <img alt="" className="crow" src="/imgs/crowin.svg" />
          <div className="calender" id="calender">
            <div id="calenderbtn2">
              <img alt="" src="imagee/calenderr.svg" />
              <label className="lebalapp">Team Manage</label>
            </div>
          </div>

          <div className="systemhead">Team Manage</div>
          <div className="settingsec">
            <div className="settingsiimg">
              <img alt="" src="/images/settingg.svg" />
            </div>
            <Link to="/setting">
              <div>
                <img alt="" src="imagee/settingg.svg" />
                <label className="set">Settings</label>
              </div>
            </Link>
          </div>
        </div>
        <div className="sec-div">
          <div className="main">
            <div
              className="threeline"
              id="threeline"
              onClick={() => setOpen((prev) => !prev)}
            >
              <img alt="" src="/images/three line.svg" />
            </div>
            <div className="inputcontainer">
              <img alt="" src="/imagee/search 1.svg" />
              <input
                className="input-text"
                id="Email"
                name="Search"
                placeholder="Search"
                type
              />
            </div>

            <div className="notificaitions">
              <div>
                <img alt="" className="noti" src="/images/Group 404.svg" />
              </div>

              <div className="dropdown">
                <Dropdown style={{ outline: "none" }}>
                  <Dropdown.Toggle variant="" id="">
                    <img alt="" className="admi" src="/images/Group 403.svg" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="dropmenu"
                    style={{ backgroundColor: "#73a47" }}
                  >
                    <Dropdown.Item className="linksname" href="/setting">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="linksname"
                      href="#"
                      //   onClick={handleLogout}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="main2">
            <div className="heading">
              <div className="heading1">Appointments - All</div>
              <div className="home">
                <Link to="/dashboard">
                  <span> Dashboard</span>
                </Link>
                <Link to="/index">/ Appointments</Link>
              </div>
            </div>

            <div className="btnapp">
              <Link to="/index">
                <button className="Appointments">+ New Appointment</button>
              </Link>
            </div>
          </div>
          <div className="main3">
            <div className="header">
              <div className="details name">User Id</div>
              <div className="details status">Name</div>
              <div className="details app">Email</div>
              <div className="details addad">Added</div>
              <div className="details act">Action</div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img alt="" src="/imagee/dr.john.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. John Doe</div>
                  <div className="email">johndoe@gmail.com</div>
                </div>
              </div>
              <div className="status1">Done</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img alt="" src="/imagee/multiply (1) 1.svg" />
                <img alt="" src="/imagee/Group 363.svg" />
                <img alt="" src="imagee/Group 387.svg" />
              </div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img alt="" src="/imagee/dr.maura.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. Maura Star</div>
                  <div className="email">maurastar@gmail.com</div>
                </div>
              </div>
              <div className="status1">Upcoming</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img alt="" src="/imagee/multiply (1) 1.svg" />
                <img alt="" src="/imagee/Group 363.svg" />
                <img alt="" src="imagee/Group 387.svg" />
              </div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img alt="" src="/imagee/dr.james.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. James Doe</div>
                  <div className="email">jamesdoe@gmail.com</div>
                </div>
              </div>
              <div className="status1">Cancelled</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img alt="" src="/imagee/multiply (1) 1.svg" />
                <img alt="" src="/imagee/Group 363.svg" />
                <img alt="" src="imagee/Group 387.svg" />
              </div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img alt="" src="/imagee/dr.walliams.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. Williams David</div>
                  <div className="email">williamsdavid@gmail.com</div>
                </div>
              </div>
              <div className="status1">Done</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img alt="" src="/imagee/multiply (1) 1.svg" />
                <img alt="" src="/imagee/Group 363.svg" />
                <img alt="" src="imagee/Group 387.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
