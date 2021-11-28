import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"
//components
import AdminLoggedOut from "./Components/AdminLoggedOut"
import Welcome from "./Components/Welcome"
import ClientLoggedOut from "./Components/ClientLoggedOut"
import CustomerForm from "./Components/CustomerForm"
import AdminDashboard from "./Components/AdminDashboard"
import PageNotFound from "./Components/PageNotFound"

//context
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import { useEffect } from "react"
function App() {
  const initialState = {
    adminLoggedIn: false,
    user: {
      uniqueId: "",
      username: "",
      password: "",
    },
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function ourReducer(draft, action) {
    switch (action.type) {
      case "adminLogin":
        draft.adminLoggedIn = true
        draft.user = action.data
        return
      case "adminLogOut":
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
    } else {
      localStorage.removeItem("GurkhasAdminToken")
      localStorage.removeItem("GurkhasAdminUsername")
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
          <Route path="/admin/dashboard" exact>
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
