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
import RejectPanel from "./rejectPanel"
function CustomerView() {
  const appState = useContext(StateContext)
  const { id } = useParams()
  const initialState = {
    userLoaded: false,
    hasNominee: false,
    nomineeData: {},
    hasGuardian: false,
    guardianData: {},
    userData: {},
    temporaryAddress: {},
    permanentAddress: {},
    showRejectPanel: false,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "loadUser":
        draft.userData = action.value

        return
      case "userLoaded":
        draft.userLoaded = true
        return
      case "hasNominee":
        draft.hasNominee = true
        draft.nomineeData = action.value
        return
      case "hasGuardian":
        draft.hasGuardian = true
        draft.guardianData = action.value
        return
      case "updateTemporaryAddress":
        draft.temporaryAddress = action.value
        return
      case "updatePermanentAddress":
        draft.permanentAddress = action.value
        return
      case "toggleRejectPanel":
        draft.showRejectPanel = !draft.showRejectPanel
        return
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  useEffect(() => {
    if (state.userLoaded) {
      if (state.userData.relationships && state.userData.relationships.length) {
        state.userData.relationships.map((item, i) => {
          console.log(item.type, "item type ffrom the useeffect")
          if (item.type == "nominee") {
            dispatch({ type: "hasNominee", value: item })
          }
          if (item.type == "guardian") {
            dispatch({ type: "hasGuardian", value: item })
          }
        })
      }
      if (state.userData.addresses && state.userData.addresses.length) {
        state.userData.addresses.map((item, i) => {
          console.log(item.type, "item type ffrom the useeffect")
          if (item.type == "temporary") {
            dispatch({ type: "updateTemporaryAddress", value: item })
          }
          if (item.type == "permanent") {
            dispatch({ type: "updatePermanentAddress", value: item })
          }
        })
      }
    }
  }, [state.userLoaded])

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchCustomers() {
      try {
        const response = await axios.get(`http://localhost:8000/api/customers/${id}`, { headers: { Authorization: `Bearer ${appState.user.data.token}` } }, { cancelToken: ourRequest.token })
        console.log(response.data.data)
        dispatch({ type: "loadUser", value: response.data.data })
        dispatch({ type: "userLoaded" })
      } catch (e) {
        console.log(e, "there was an error fetching customers")
      }
    }
    fetchCustomers()
    return () => ourRequest.cancel()
  }, [])

  function toggleRejectPanel() {
    console.log("hello")
    dispatch({ type: "toggleRejectPanel" })
  }

  if (!state.userLoaded) {
    return <div>Loading ...</div>
  }
  console.log(state.userData.personal_informations && state.userData.personal_informations[0])
  return (
    <div>
      <Link to="/admin/dashboard/customers"> back to customer list</Link>
      <div className="button-group">
        <span onClick={toggleRejectPanel} className="btn btn-danger d-inline-block">
          Reject
        </span>
        <span className="btn btn-success d-inline-block">Approve</span>
      </div>
      {state.showRejectPanel && (
        <div className="reject-panel-container">
          <RejectPanel />
        </div>
      )}

      <div className="secondary-navigation">
        <ul>
          <li>
            <Link to={`/admin/dashboard/customers/${id}`}>Personal Info</Link>
          </li>
          {state.hasGuardian && (
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
          {state.hasNominee && (
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
          <PersonalInfo fullName={state.userData.full_name} userName={state.userData.username} mobile={state.userData.mobile} email={state.userData.email} isMinor={state.userData.is_minor} nominee={state.userData.nominee} accountType={state.userData.demat_account_type} dematAcType={state.userData.demat_account_type} personalInfo={state.userData.personal_information ? state.userData.personal_information[0] : ""} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/guardian" exact>
          {state.hasGuardian && <Guardian guardian={state.guardianData} />}
        </Route>
        <Route path="/admin/dashboard/customers/:id/address" exact>
          <Address temporary={state.temporaryAddress} permanent={state.permanentAddress} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/family" exact>
          <Family family={state.userData.families ? state.userData.families[0] : ""} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/nominee" exact>
          {state.hasNominee ? <Nominee nominee={state.hasNominee ? state.nomineeData : ""} /> : ""}
        </Route>
        <Route path="/admin/dashboard/customers/:id/occupation" exact>
          <Occupation occupation={state.userData.occupations.length ? state.userData.occupations[0] : ""} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/account" exact>
          <Account account={state.userData.accounts ? state.userData.accounts[0] : ""} />
        </Route>
        <Route path="/admin/dashboard/customers/:id/documents" exact>
          <Documents documents={state.userData.documents ? state.userData.documents[0] : ""} />
        </Route>
      </Switch>
    </div>
  )
}

export default CustomerView
