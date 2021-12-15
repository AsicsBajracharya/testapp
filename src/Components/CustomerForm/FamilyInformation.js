import { defaultProps } from "@sbmdkl/nepali-datepicker-reactjs"
import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import FormDispatch from "./FormDispatch"
import FormState from "./FormState"
function FamilyInformation(props) {
  const formDispatch = useContext(FormDispatch)
  const [saveCount, setSaveCount] = useState(0)
  const initialState = {
    fathersName: {
      name: "fathersName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    grandFathersName: {
      name: "grandFathersName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    mothersName: {
      name: "mothersName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    spousesName: {
      name: "spousesName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    daughterInLawsName: {
      name: "daughterInLawsName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    fatherInLawsName: {
      name: "fatherInLawsName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    sonsName: {
      name: "sonsName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    daughtersName: {
      name: "daughtersName",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "inputChange":
        for (const key in draft) {
          if (draft[key].name == action.field) {
            draft[key].hasErrors = false
            draft[key].touched = true
            draft[key].value = action.value
          }
        }
        return
      case "validateForm":
        let errorCount = 0
        for (const key in draft) {
          if (!draft[key].value.length) {
            draft[key].hasErrors = true
            draft[key].message = "This field cannot be blank"
          }
        }
        for (const key in draft) {
          if (draft[key].hasErrors) {
            errorCount++
          }
        }
        // console.log("error count is ", errorCount)
        if (!errorCount) {
          setSaveCount(saveCount + 1)
        }
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (saveCount) {
      formDispatch({
        type: "saveFamily",
        value: {
          father_name: state.fathersName.value,
          grand_father_name: state.grandFathersName.value,
          mother_name: state.mothersName.value,
          spouse: state.spousesName.value,
          son_name: state.sonsName.value,
          daughter_name: state.daughtersName.value,
          father_in_law_name: state.fatherInLawsName.value,
          daughter_in_law_name: state.daughterInLawsName.value,
        },
      })
      props.history.push("/customers/register/occupation")
    }
  }, [saveCount])

  function handleSubmit() {
    dispatch({ type: "validateForm" })
  }

  function handleCheck(e) {
    console.log("checkbox", e.target.checked)
    if (e.target.checked) {
      formDispatch({ type: "nomineeTrue" })
    } else {
      formDispatch({ type: "nomineeFalse" })
    }
  }
  return (
    <div className="card">
      <div className="card-header">
        <h3>Family member details</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-father_name">Father's Name*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "fathersName" })} type="text" id="family-father_name" className="form-control" placeholder="Enter your Father's Name" required />
              </div>
              {state.fathersName.hasErrors && <p className="text-danger">{state.fathersName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-grandfather_name">Grandfather's Name*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "grandFathersName" })} type="text" id="family-grandfather_name" className="form-control" placeholder="Enter your Grandfather's Name" required />
              </div>
              {state.grandFathersName.hasErrors && <p className="text-danger">{state.grandFathersName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-mother_name">Mother's Name*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "mothersName" })} type="text" id="family-mother_name" className="form-control" placeholder="Enter your Mother's Name" required />
              </div>
              {state.mothersName.hasErrors && <p className="text-danger">{state.mothersName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-spouse_name">Spouse Name</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "spousesName" })} type="text" id="family-spouse_name" className="form-control" placeholder="Enter your spouses Name" />
              </div>
              {state.spousesName.hasErrors && <p className="text-danger">{state.spousesName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-daughter_in_law_name">Daughter in Law's Name</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "daughterInLawsName" })} type="text" id="family-daughter_in_law_name" className="form-control" placeholder="Enter your daughter in law" />
              </div>
              {state.daughterInLawsName.hasErrors && <p className="text-danger">{state.daughterInLawsName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-father_in_law_name">Father's in Law's Name</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "fatherInLawsName" })} type="text" id="family-father_in_law_name" className="form-control" placeholder="Enter your father in law's Name" />
              </div>
              {state.fatherInLawsName.hasErrors && <p className="text-danger">{state.fatherInLawsName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-son_name">Son's Name</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "sonsName" })} type="text" id="family-son_name" className="form-control" placeholder="Enter your Son's Name" />
              </div>
              {state.sonsName.hasErrors && <p className="text-danger">{state.sonsName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="family-daughter_name">Daughter's Name</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "daughtersName" })} type="text" id="family-daughter_name" className="form-control" placeholder="Enter your Daughter's Name" />
              </div>
              {state.daughtersName.hasErrors && <p className="text-danger">{state.daughtersName.message}</p>}
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <div className="input-group">
                <input onChange={handleCheck} type="checkbox" class="form-input" id="family-add_nominee" />
                <label for="family-add_nominee">Do you want to add nominee?</label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <span onClick={handleSubmit} className="btn btn-primary">
            Next
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(FamilyInformation)
