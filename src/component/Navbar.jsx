import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="container navbar navbar-expand-lg navbar-light justify-content-between">
        <a class="navbar-brand" style={{marginRight: "200px"}} href="#">
          <img src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
              Find Fuel
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              Blog & News
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fuel Tools
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              Pay with  <span style={{color: "#BD360B"}}>FuelZone</span>
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 d-flex" style={{ marginLeft : "100px"}}>
          <div class="nav-item dropdown" style={{marginTop:"5px", marginRight:"5px"}}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Language
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <button class="btn btn-warning my-2 my-sm-0" style={{color: "white"}} type="submit">
              <a href="https://register-page-fuelzone.netlify.app/">register</a>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
