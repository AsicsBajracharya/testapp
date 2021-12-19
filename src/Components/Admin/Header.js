import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import logo from "../../Assets/images/logo.png"
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="image-container">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-9">
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <div className="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faBell} />
                </li>
                <li className="nav-item">
                  <div className="d-flex">
                    <div className="image-container"></div>
                    <p>user name</p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
