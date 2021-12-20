import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../Assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faCog, faUsers, faChevronDown, faUser, faKey } from "@fortawesome/free-solid-svg-icons"
function Sidebar() {
  const [showSubMenu, setShowSubMenu] = useState(false)
  function showMenu() {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="logo-container">
          <img src={logo} alt="Gurkhas finance" />
        </div>
        <ul className="sidenav-menu">
          <li className="sidenav-item">
            <Link to="/admin/dashboard">
              <FontAwesomeIcon icon={faChartLine} />
              Dashboard
            </Link>
          </li>
          <li className="sidenav-item sidenav-item-has-children">
            <FontAwesomeIcon icon={faCog} />
            Access Management
            <FontAwesomeIcon icon={faChevronDown} onClick={showMenu} />
            {showSubMenu && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/admin/dashboard/users">
                    <FontAwesomeIcon icon={faUser} />
                    Users
                  </Link>
                </li>

                <li className="sub-menu-item">
                  <Link to="/admin/dashboard/roles">
                    <FontAwesomeIcon icon={faKey} />
                    Roles{" "}
                  </Link>
                </li>
              </ul>
            )}
          </li>{" "}
          <li className="sidenav-item">
            <Link to="/admin/dashboard/customers">
              <FontAwesomeIcon icon={faUsers} />
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
