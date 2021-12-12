import React, { useEffect } from "react"
import { withRouter } from "react-router"
import { useContext } from "react"
import { useImmerReducer } from "use-immer"
import FormDispatch from "./FormDispatch"
function Occupation(props) {
  const formDispatch = useContext(FormDispatch)
  const initialState = {
    errorCount: 0,
    submitCount: 0,
    formData: {
      occupation: {
        name: "occupation",
        value: "",
        hasErrors: false,
        message: "",
      },
      businessType: {
        name: "businessType",
        value: "",
        hasErrors: false,
        message: "",
      },
      organizationName: {
        name: "organizationName",
        value: "",
        hasErrors: false,
        message: "",
      },
      organizationAddress: {
        name: "organizationAddress",
        value: "",
        hasErrors: false,
        message: "",
      },
      designation: {
        name: "designation",
        value: "",
        hasErrors: false,
        message: "",
      },
      incomeRange: {
        name: "incomeRage",
        value: "",
        hasErrors: false,
        message: "",
      },
    },
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "inputChange":
        for (const key in draft.formData) {
          console.log("the reducer hit for the occupation page")
          if (draft.formData[key].name == action.field) {
            draft.formData[key].hasErrors = false
            draft.formData[key].value = action.value
          }
        }
        return
      case "setIncomeRange":
        draft.formData.incomeRange.value = action.value
        draft.formData.incomeRange.hasErrors = false
        return
      case "validateForm":
        draft.errorCount = 0
        for (const key in draft.formData) {
          if (!draft.formData[key].value.length) {
            draft.formData[key].hasErrors = true
            draft.formData[key].message = "This field cannot be blank"
          }
        }
        for (const key in draft.formData) {
          if (draft.formData[key].hasErrors) {
            draft.errorCount++
          }
        }
        // console.log("error count is ", errorCount)
        if (!draft.errorCount) {
          console.log("there are no errors")
          draft.submitCount++
        }
        return
      case "default":
        return
    }
  }

  function handleSubmit() {
    dispatch({ type: "validateForm" })
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.submitCount) {
      console.log("forrm can be submitted for the occuption blcok")
      formDispatch({
        type: "saveOccupation",
        value: {
          title: state.formData.occupation.value,
          type: state.formData.businessType.value,
          organization_name: state.formData.organizationName.value,
          address: state.formData.organizationAddress.value,
          designation: state.formData.designation.value,
          financial_details: state.formData.incomeRange.value,
        },
      })
      props.history.push("/customers/register/account")
    }
  }, [state.submitCount])
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <h3>Occupation details</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="occupation-occupation">Occupation</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "occupation" })} name="" id="occupation-occupation" className="form-control">
                  <option value="initial">Select your occupation</option>
                  <option value="Business">Business</option>
                  <option value="Farmer">Farmer</option>
                  <option value="Government Service">Government Service</option>
                  <option value="Housewife">Housewife</option>
                  <option value="Others">Others</option>
                  <option value="Professional">Professional</option>
                  <option value="Public Sector">Public Sector</option>
                  <option value="Private Sector">Private Sector</option>
                  <option value="Retired">Retired</option>
                  <option value="Service">Service</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              {state.formData.occupation.hasErrors && <p className="text-danger">{state.formData.occupation.message}</p>}
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="occupation-type_of_business">Type of Business</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "businessType" })} name="" id="occupation-type_of_business" className="form-control">
                  <option value="initial">Select a business</option>
                  <option value="Production">Production</option>
                  <option value="Service Oriented">Service Oriented</option>
                </select>
              </div>
              {state.formData.businessType.hasErrors && <p className="text-danger">{state.formData.businessType.message}</p>}
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="occupation-organization_name">Organization's Name</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "organizationName" })} type="text" id="occupation-organization_name" className="form-control" placeholder="Enter Your Organization's Name" />
              </div>
              {state.formData.organizationName.hasErrors && <p className="text-danger">{state.formData.organizationName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="occupation-organization_address">Address</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "organizationAddress" })} type="text" id="occupation-organization_address" className="form-control" placeholder="Enter Your Organization's Address" />
              </div>
              {state.formData.organizationAddress.hasErrors && <p className="text-danger">{state.formData.organizationAddress.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="occupation-designation">Designation</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "designation" })} type="text" id="occupation-designation" className="form-control" placeholder="Enter Your designation in organization" />
              </div>
              {state.formData.designation.hasErrors && <p className="text-danger">{state.formData.designation.message}</p>}
            </div>
          </div>
          <div className="col-md-12">
            <p>Select your Financial Details</p>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "setIncomeRange", value: "1" })} type="radio" name="income_range" id="occupation-financial_details" className="form-control" />
                <label htmlFor="occupation-financial_details">Upto Rs. 1,00,000</label>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "setIncomeRange", value: "2" })} type="radio" name="income_range" id="occupation-financial_details" className="form-control" />
                <label htmlFor="occupation-financial_details">From Rs. 1,00,001 to Rs. 2,00,000</label>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "setIncomeRange", value: "3" })} type="radio" name="income_range" id="occupation-financial_details" className="form-control" />
                <label htmlFor="occupation-financial_details">From Rs. 2,00,001 to Rs. 5,00,000</label>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "setIncomeRange", value: "4" })} type="radio" name="income_range" id="occupation-financial_details" className="form-control" />
                <label htmlFor="occupation-financial_details">Above Rs. 5,00,000</label>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "setIncomeRange", value: "5" })} type="radio" name="income_range" id="occupation-financial_details" className="form-control" />
                <label htmlFor="occupation-financial_details">Not Available</label>
              </div>
            </div>
          </div>
          {state.formData.incomeRange.hasErrors && <p className="text-danger">{state.formData.incomeRange.message}</p>}
        </div>
      </div>
      <div className="card-footer">
        <span onClick={handleSubmit} className="btn btn-primary">
          Next
        </span>
      </div>
    </div>
  )
}

export default withRouter(Occupation)
