import React, { useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { Switch, Route } from "react-router-dom"
//CONTEXT
// import FormStateContext from "./FormStateContext"
// import FormDispatchContext from "./FormDispatchContext"
//COMPONENTS
import PersonalInfo from "./PersonalInfo"
import Address from "./Address"
import ReadyDocuments from "./ReadyDocuments"

function DematForm() {
  const initialState = {}
  function ourReducer(draft, action) {
    switch (action.type) {
      case "dobChange":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/customers/register/dematForm">
            <ReadyDocuments />
          </Route>
          <Route path="/customers/register/dematForm/personalInfo">
            <PersonalInfo />
          </Route>
          <Route exact path="/customers/register/dematForm/address">
            dsfjasl;dfjd
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default DematForm
