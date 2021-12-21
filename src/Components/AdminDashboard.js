import React, { useContext, useEffect } from "react"
import { withRouter, Switch, Route } from "react-router"
//COMPONENTS

import Sidebar from "./Admin/Sidebar"
import Header from "./Admin/Header"
import Dashboard from "./Admin/Dashboard"
import Users from "./Admin/Users"
import Roles from "./Admin/Roles"
import Customers from "./Admin/Customers"
import CustomerView from "./Admin/CustomerView/CustomerView"
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

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <Switch>
          <Route path="/admin/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/admin/dashboard/users" exact>
            <Users />
          </Route>
          <Route path="/admin/dashboard/roles" exact>
            <Roles />
          </Route>
          <Route path="/admin/dashboard/customers" exact>
            <Customers />
          </Route>
          <Route path="/admin/dashboard/customers/:id">
            <CustomerView />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(AdminDashboard)
