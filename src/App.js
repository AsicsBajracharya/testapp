import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"
//components
import AdminLoggedOut from "./Components/AdminLoggedOut"
import Welcome from "./Components/Welcome"
import ClientLoggedOut from "./Components/ClientLoggedOut"
// import CustomerForm from "./Components/CustomerForm"
import CustomerForm from "./Components/CustomerForm/CustomerForm"
import AdminDashboard from "./Components/AdminDashboard"
import PageNotFound from "./Components/PageNotFound"

//context
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import { useEffect } from "react"
function App() {
  const initialState = {
    adminLoggedIn: Boolean(localStorage.getItem("GurkhasAdminToken")),
    user: {
      data: {
        token: localStorage.getItem("GurkhasAdminToken"),
        user: {
          email: localStorage.getItem("GurkhasAdminUsername"),
        },
      },
    },
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function ourReducer(draft, action) {
    switch (action.type) {
      case "adminLogin":
        draft.adminLoggedIn = true
        draft.user = action.value
        return
      case "adminLogout":
        draft.adminLoggedIn = false
        return
      case "otpSend":
        draft.user.uniqueId = action.value
        return
      case "saveUsername":
        draft.user.username = action.value
        return
      case "savePassword":
        draft.user.password = action.value
        return
    }
  }

  useEffect(() => {
    if (state.adminLoggedIn) {
      console.log("user data", state.user)
      localStorage.setItem("GurkhasAdminToken", state.user.data.token)
      localStorage.setItem("GurkhasAdminUsername", state.user.data.user.email)
      localStorage.setItem("GurkhasAdminData", JSON.stringify(state.user.data))
    } else {
      localStorage.removeItem("GurkhasAdminToken")
      localStorage.removeItem("GurkhasAdminUsername")
      localStorage.removeItem("GurkhasAdminData")
    }
  }, [state.adminLoggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
          </Switch>
          <Route path="/admin" exact>
            <AdminLoggedOut />
          </Route>
          <Route path="/admin/dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/login" exact>
            <ClientLoggedOut />
          </Route>
          <Route path="/customers/register">
            <CustomerForm />
          </Route>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
