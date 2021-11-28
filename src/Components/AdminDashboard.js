import React, { useContext, useEffect } from "react"
import { withRouter } from "react-router"
import DispatchContext from "../DispatchContext"
function AdminDashboard(props) {
  const appDispatch = useContext(DispatchContext)
  function handleLogout(e) {
    e.preventDefault()
    appDispatch({ type: "adminLogout" })
    props.history.push("/admin")
  }
  return <button onClick={handleLogout}>logout</button>
}

export default withRouter(AdminDashboard)
