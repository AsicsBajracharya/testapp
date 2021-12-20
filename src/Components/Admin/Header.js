import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import logo from "../../Assets/images/logo.png"
import avatar from "../../Assets/images/avatar-small.jpg"
import DropDown from "./Dropdown"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@mui/icons-material/Menu"
function Header() {
  const [showMenu, setShowMenu] = useState(false)
  function showDropDown() {
    setShowMenu(!showMenu)
  }
  return (
    <header>
      <div className="container-fluid ">
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
                <li className="nav-item nav-item-has-children">
                  <div onClick={showDropDown} className="d-flex align-items-center">
                    <div className="image-container avatar">
                      <img src={avatar} alt="" />
                    </div>
                    <p>user name</p>
                  </div>
                  {showMenu && <DropDown />}
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
