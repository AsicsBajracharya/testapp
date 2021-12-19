import React, { useContext, useEffect } from "react"
import { withRouter } from "react-router"

import Header from "./Admin/Header"
//CONTEXTS
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
function AdminDashboard(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  useEffect(() => {
    if (!appState.adminLoggedIn) {
      props.history.push("/admin")
    }
  }, [])
  function handleLogout(e) {
    e.preventDefault()
    appDispatch({ type: "adminLogout" })
    props.history.push("/admin")
  }
  return (
    <>
      <Header />
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default withRouter(AdminDashboard)
