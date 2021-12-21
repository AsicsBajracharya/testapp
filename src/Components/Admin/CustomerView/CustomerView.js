import React, { useEffect } from "react"
import { useParams, Switch, Route, Link } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import axios from "axios"
import StateContext from "../../../StateContext"
import { useContext } from "react"
//COMPONENTS
import PersonalInfo from "./PersonalInfo"
import Guardian from "./Guardian"
import Address from "./Address"
import Family from "./Family"
import Nominee from "./Nominee"
import Occupation from "./Occupation"
import Account from "./Account"
import Documents from "./Documents"
function CustomerView() {
  const appState = useContext(StateContext)
  const { id } = useParams()
  const initialState = {
    userData: {},
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "loadUser":
        draft.userData = action.value
        return
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchCustomer() {
      try {
        // const response = await axios.get()
      } catch (e) {}
    }
    fetchCustomer()
    return () => ourRequest.cancel()
  }, [])

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchCustomers() {
      try {
        const response = await axios.get(`http://localhost:8000/api/customers/${id}`, { headers: { Authorization: `Bearer ${appState.user.data.token}` } }, { cancelToken: ourRequest.token })
        console.log(response.data.data)
        dispatch({ type: "loadUser", value: response.data.data })
      } catch (e) {
        console.log(e, "there was an error fetching customers")
      }
    }
    fetchCustomers()
    return () => ourRequest.cancel()
  }, [])
  console.log(state.userData.id)
  if (!state.userData.id) {
    return <div>Loading ...</div>
  }
  console.log(state.userData.id)
  return (
    <div>
      <div className="secondary-navigation">
        <ul>
          <li>
            <Link to={`/admin/dashboard/customers/${id}`}>Personal Info</Link>
          </li>
          {state.userData.relationships.length && (
            <li>
              <Link to={`/admin/dashboard/customers/${id}/guardian`}>Guardian</Link>
            </li>
          )}
          <li>
            <Link to={`/admin/dashboard/customers/${id}/address`}>Address</Link>
          </li>
          <li>
            <Link to={`/admin/dashboard/customers/${id}/family`}>Family</Link>
          </li>
          {state.userData.relationships.length >= 1 && (
            <li>
              <Link to={`/admin/dashboard/customers/${id}/nominee`}>Nominee</Link>
            </li>
          )}
          <li>
            <Link to={`/admin/dashboard/customers/${id}/occupation`}>Occupation</Link>
          </li>
          <li>
            <Link to={`/admin/dashboard/customers/${id}/account`}>Account</Link>
          </li>
          <li>
            <Link to={`/admin/dashboard/customers/${id}/documents`}>documents</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/admin/dashboard/customers/:id" exact>
          <PersonalInfo fullName={state.userData.full_name} userName={state.userData.username} mobile={state.userData.mobile} email={state.userData.email} isMinor={state.userData.is_minor} nominee={state.userData.nominee} accountType={state.userData.demat_account_type} dematAcType={state.userData.demat_account_type} personalInfo={state.userData.personal_information.length && state.userData.personal_information[0]} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/guardian" exact>
          {state.userData.relationships.length && <Guardian guardian={state.userData.relationships.length ? state.userData.relationships[0] : ""} />}
        </Route>
        <Route path="/admin/dashboard/customers/:id/address" exact>
          <Address temporary={state.userData.addresses.length && state.userData.addresses[0]} permanent={state.userData.addresses.length && state.userData.addresses[1]} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/family" exact>
          <Family family={state.userData.families.length && state.userData.families[0]} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/nominee" exact>
          {state.userData.relationships.length >= 1 && <Nominee nominee={state.userData.relationships.length ? state.userData.relationships[1] : ""} />}
        </Route>
        <Route path="/admin/dashboard/customers/:id/occupation" exact>
          <Occupation occupation={state.userData.occupations.length && state.userData.occupations[0]} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/account" exact>
          <Account account={state.userData.accounts.length && state.userData.accounts[0]} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/documents" exact>
          <Documents documents={state.userData.documents.length && state.userData.documents[0]} />
        </Route>
      </Switch>
    </div>
  )
}

export default CustomerView
