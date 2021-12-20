import React, { useEffect } from "react"
import { useContext } from "react"
import DispatchContext from "../../DispatchContext"
function DropDown() {
  const appDispatch = useContext(DispatchContext)

  function handleLogout(e) {
    e.preventDefault()
    appDispatch({ type: "adminLogout" })
  }
  return (
    <div className="drop-down">
      <div className="card">
        <div className="card-body">
          <ul>
            <li>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropDown
