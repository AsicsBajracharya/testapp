import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Calendar from "@sbmdkl/nepali-datepicker-reactjs"
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css"
import adbs from "ad-bs-converter"
import districts from "../../Assets/district-list-nepal"
import { useImmerReducer } from "use-immer"
import axios from "axios"
//CONTEXTS
import FormState from "./FormState"
import FormDispatch from "./FormDispatch"

function PersonalInfo(props) {
  const formState = useContext(FormState)
  const formDispatch = useContext(FormDispatch)
  const initialState = {
    fullName: {
      name: "fullName",
      value: formState.formData.customers.full_name,
      hasErrors: false,
      message: "",
      touched: false,
    },
    dobBs: {
      name: "dobBs",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    dobAd: {
      name: "dobAd",
      value: new Date(),
      hasErrors: false,
      message: "",
      touched: false,
      dobFormatted: "",
    },
    gender: {
      name: "gender",
      value: formState.formData.personal_informations.gender,
      hasErrors: false,
      message: "",
      touched: false,
    },
    maritalStatus: {
      name: "maritalStatus",
      value: formState.formData.personal_informations.marital_status,
      hasErrors: false,
      message: "",
      touched: false,
    },
    accountType: {
      name: "accountType",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    nationality: {
      name: "nationality",
      value: formState.formData.personal_informations.nationality,
      hasErrors: false,
      message: "",
      touched: false,
    },
    typeOfId: {
      name: "typeOfId",
      value: formState.formData.personal_informations.identity_card_type,
      hasErrors: false,
      message: "",
      touched: false,
    },
    idNo: {
      name: "idNo",
      value: formState.formData.personal_informations.identity_card_number,
      hasErrors: false,
      message: "",
      touched: false,
    },
    idIssueDistrict: {
      name: "idIssueDistrict",
      value: formState.formData.personal_informations.identity_card_issue_district,
      hasErrors: false,
      message: "",
      touched: false,
    },
    idIssueDateBs: {
      name: "idIssueDateBs",
      value: "",
      hasErrors: false,
      message: "",
      touched: false,
    },
    idIssueDate: {
      name: "idIssueDate",
      value: new Date(),
      hasErrors: false,
      message: "",
      touched: false,
      dateFormatted: "",
    },
    pan: {
      name: "pan",
      value: formState.formData.personal_informations.pan_number,
      hasErrors: false,
      message: "",
      touched: false,
      checkCount: 0,
      checkingNow: false,
    },
    checkCount: {
      counter: 0,
      hasErrors: false,
      touched: true,
    },
    submitCount: {
      counter: 0,
      hasErrors: false,
      touched: true,
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "inputChange":
        for (const key in draft) {
          if (draft[key].name == action.field) {
            // console.log(action.field, "fullname")
            draft[key].hasErrors = false
            draft[key].touched = true
            draft[key].value = action.value
          }
        }
        return
      case "inputBlur":
        console.log("this reducer hit")
        for (const key in draft) {
          if (draft[key].name == action.field) {
            console.log("action.value", action.value)
            if (action.value.trim() == "") {
              draft[key].hasErrors = true
              draft[key].message = `This field cannot be blank`
              return
            }
            draft[key].value = action.value
          }
        }
        return
      case "fullNameChange":
        draft.fullName.touched = true
        if (action.value.length > 50) {
          draft.fullName.hasErrors = true
          draft.fullName.message = "Full name cannot exceed 50 characters"
          return
        }
        draft.fullName.hasErrors = false
        draft.fullName.value = action.value
        return
      case "validateFullName":
        if (action.value.length < 3) {
          draft.fullName.hasErrors = true
          draft.fullName.message = "Full name must be alteast 3 chaacter's long"
        }
        return
      case "dobBsChange":
        draft.dobBs.touched = true
        draft.dobBs.hasErrors = false
        draft.dobBs.value = action.value
        return
      case "dobAdChange":
        console.log("dobadchanged reducer hit")
        draft.dobAd.touched = true
        draft.dobAd.hasErrors = false
        draft.dobAd.value = action.value
        draft.dobAd.dobFormatted = formatDate(action.value)
        console.log(draft.dobAd.value.getFullYear())
        console.log(new Date().getFullYear() - draft.dobAd.value.getFullYear())
        const yearToday = new Date().getFullYear() - draft.dobAd.value.getFullYear()
        if (parseInt(yearToday) < 16) {
          console.log("year is less than 16 hyears onld")
          formDispatch({ type: "minorTrue" })
        } else {
          formDispatch({ type: "minorFalse" })
        }

        return
      case "idIssueDateChange":
        console.log("id issue date change reducer hit")
        draft.idIssueDate.touched = true
        draft.idIssueDate.hasErrors = false
        draft.idIssueDate.value = action.value
        draft.idIssueDate.dateFormatted = formatDate(action.value)
        return
      case "panChange":
        draft.pan.touched = true
        draft.pan.hasErrors = false
        draft.pan.value = action.value
        return
      case "validatePAN":
        if (action.value.length < 9) {
          draft.pan.hasErrors = true
          draft.pan.message = "PAN number must not be less than 9 digits"
          return
        } else if (action.value.length > 9) {
          draft.pan.hasErrors = true
          draft.pan.message = "PAN number must not be more than 9 digits"
          return
        }
        draft.pan.checkCount++
        return
      case "checkingPAN":
        draft.pan.checkingNow = true
        draft.pan.message = "Checking...."
        return
      case "panAvailable":
        draft.pan.message = "PAN number available"
        return
      case "panUnavailable":
        draft.pan.message = "PAN number already in use"
        return
      case "checkForErrors":
        console.log("checking for errors")
        var errorCount = 0
        var unTouchedCount = 0
        for (const key in draft) {
          var touchedCount

          if (!draft[key].touched) {
            draft[key].hasErrors = true
            draft[key].message = "you must fill this field to navigate to the another step"
            unTouchedCount++
            // console.log("untouchedcount", unTouchedCount)
          }
          if (draft[key].hasErrors) {
            errorCount++
          }
        }
        console.log("ready to submit", errorCount)
        if (errorCount == 0) {
          draft.submitCount.counter++
        }
      case "default":
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  const handleDate = ({ bsDate, adDate }) => {
    dispatch({ type: "dobBsChange", value: bsDate, field: "dobBs" })
    dispatch({ type: "dobAdChange", value: new Date(adDate), field: "dobAd" })
  }

  const handleIdIssueDateBs = ({ bsDate, adDate }) => {
    dispatch({ type: "inputChange", value: bsDate, field: "idIssueDateBs" })
    dispatch({ type: "idIssueDateChange", value: new Date(adDate), field: "idIssueDate" })
  }

  function handleIdIssueDate(date) {
    dispatch({ type: "idIssueDateChange", value: date, field: "idIssueDate" })
    const convertedNepaliDate = adbs.ad2bs(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`).ne
    const formattedNepaliDate = `${convertedNepaliDate.year}-${convertedNepaliDate.month}-${convertedNepaliDate.day}`
    dispatch({ type: "inputChange", value: formattedNepaliDate, field: "idIssueDateBs" })
  }
  function handleAdDate(date) {
    dispatch({ type: "dobAdChange", value: date, field: "dobAd" })
    const convertedNepaliDate = adbs.ad2bs(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`).ne
    const formattedNepaliDate = `${convertedNepaliDate.year}-${convertedNepaliDate.month}-${convertedNepaliDate.day}`
    dispatch({ type: "inputChange", value: formattedNepaliDate, field: "dobBs" })
  }
  useEffect(() => {
    console.log("hello from the personal info")
    console.log()
    for (const key in state) {
      // console.log(`${key}: ${state[key]}`)
      var arr = state[key]
      // console.log("arr", state[key])
    }
  }, [])

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    if (state.pan.checkCount) {
      dispatch({ type: "checkingPAN" })
      async function checkPan() {
        try {
          const response = await axios.get(`http://localhost:8000/api/verify_pan_number/${state.pan.value}`, { cancelToken: ourRequest.token })

          console.log(response.data)
          dispatch({ type: "panAvailable" })
        } catch (e) {
          console.log(e, "there was an error")
          dispatch({ type: "panUnavailable" })
        }
      }
      checkPan()
    }

    return () => ourRequest.cancel()
  }, [state.pan.checkCount])
  useEffect(() => {
    if (state.submitCount.counter) {
      console.log("ready to submit the personal form")
      formDispatch({
        type: "savePersonalInfo",
        value: {
          dob: state.dobAd.dobFormatted,
          gender: state.gender.value,
          marital_status: state.maritalStatus.value,
          nationality: state.nationality.value,
          pan_number: state.pan.value,
          identity_card_type: state.typeOfId.value,
          identity_card_number: state.idNo.value,
          identity_card_issue_district: state.idIssueDistrict.value,
          identity_card_issue_date: state.idIssueDate.dateFormatted,
        },
      })
      formDispatch({ type: "saveFullName", value: state.fullName.value })
      if (formState.showGuardian) {
        props.history.push("/customers/register/guardian")
        return
      }
      props.history.push("/customers/register/address")
    }
  }, [state.submitCount.counter])

  function handleSubmit() {
    dispatch({ type: "checkForErrors" })
  }

  function formatDate(dateAd) {
    let preFormattedAte = new Date(dateAd)
    let year = preFormattedAte.getFullYear()
    let month = ""
    let date = ""
    console.log(preFormattedAte.getMonth() + 1)
    if (parseInt(preFormattedAte.getMonth() + 1) < 10) {
      month = `0${preFormattedAte.getMonth() + 1}`
    } else {
      month = preFormattedAte.getMonth() + 1
    }
    if (parseInt(preFormattedAte.getDate()) < 10) {
      date = `0${preFormattedAte.getDate()}`
    } else {
      date = preFormattedAte.getDate()
    }
    return `${year}-${month}-${date}`
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-full_name">Full Name*</label>
              <div className="input-group">
                <input value={state.fullName.value} onBlur={(e) => dispatch({ type: "validateFullName", value: e.target.value, field: "fullName" })} onChange={(e) => dispatch({ type: "fullNameChange", value: e.target.value, field: "fullName" })} type="text" id="personal_information-full_name" className="form-control" placeholder="Your Full Name" required />
              </div>
              {state.fullName.hasErrors && <p className="text-danger">{state.fullName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-mobile">Mobile*</label>
              <div className="input-group">
                <input readOnly value={formState.formData.customers.mobile} type="number" id="personal_information-mobile" placeholder="Your 10 digit phone number" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-email">Email*</label>
              <div className="input-group">
                <input readOnly value={formState.formData.customers.email} type="text" id="dob personal_information-email" placeholder="Your email address" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="personal_information-date_of_birth_bs">Date of Birth (B.S.)*</label>
                  <div className="input-group">
                    <input value={state.dobBs.value} type="text" value={state.dobBs.value} id="personal_information-date_of_birth_bs" className="form-control" required />
                    <Calendar className="form-control custom-control nepaliDate" value={state.dobBs.value} onChange={handleDate} theme="deepdark" />
                  </div>
                  {state.dobBs.hasErrors && <p className="text-danger">{state.dobBs.message}</p>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="personal_information-date_of_birth_ad">Date of Birth (A.D.)*</label>
                  <div className="input-group">
                    <input value={state.dobAd.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "dob" })} type="text" id="personal_information-date_of_birth_ad" className="form-control" required />
                    <DatePicker className="form-control custom-control englishDate" selected={state.dobAd.value} onChange={handleAdDate} />
                  </div>
                  {state.dobAd.hasErrors && <p className="text-danger">{state.dobAd.message}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-gender">Gender*</label>
              <div className="input-group">
                <select value={state.gender.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "gender" })} name="" id="personal_information-gender" className="form-control" required>
                  <option value="">Select your gender</option>
                  <option value="1">Decline TO Answer</option>
                  <option value="2">Male</option>
                  <option value="3">Female</option>
                </select>
              </div>
              {state.gender.hasErrors && <p className="text-danger">{state.gender.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-martial_status">Marital Status*</label>
              <div className="input-group">
                <select value={state.maritalStatus.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "maritalStatus" })} name="" id="personal_information-martial_status" className="form-control">
                  <option value="">Select your martial status</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                </select>
              </div>
              {state.maritalStatus.hasErrors && <p className="text-danger">{state.maritalStatus.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-account_type">Account Type*</label>
              <div className="input-group">
                <select value={state.accountType.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "accountType" })} name="" id="personal_information-account_type" className="form-control" required>
                  <option value="">Select your account type</option>
                  <option value="1">Nepalese</option>
                  <option value="2">NRN - Non Residental Nepali</option>
                  <option value="3">Foreign</option>
                </select>
              </div>
              {state.accountType.hasErrors && <p className="text-danger">{state.accountType.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-nationality">Nationality*</label>
              <div className="input-group">
                <select value={state.nationality.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "nationality" })} name="" id="personal_information-nationality" className="form-control" required>
                  <option value="">Select Nationality</option>
                  <option value="1">Nepalese</option>
                  <option value="2">NRN - Non Residental Nepali</option>
                  <option value="3">Foreign</option>
                </select>
              </div>
              {state.nationality.hasErrors && <p className="text-danger">{state.nationality.message}</p>}
            </div>
          </div>
          <div className="col-md-4"></div>

          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-type_of_identity_card">Type of Identitiy card*</label>
              <div className="input-group">
                <select value={state.typeOfId.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "typeOfId" })} name="" id="personal_information-type_of_identity_card" className="form-control" required>
                  <option value="">Choose your type of ID</option>
                  <option value="1">Citizenship</option>
                </select>
              </div>
              {state.typeOfId.hasErrors && <p className="text-danger">{state.typeOfId.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-identification_number">Identification Number*</label>
              <div className="input-group">
                <input value={state.idNo.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "idNo" })} type="number" id="personal_information-identification_number" className="form-control" />
              </div>
              {state.typeOfId.hasErrors && <p className="text-danger">{state.typeOfId.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-id_issued_district">ID Issued District*</label>
              <select value={state.idIssueDistrict.value} onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "idIssueDistrict" })} name="" id="personal_information-id_issued_district" className="form-control" required>
                {districts.map((item, i) => {
                  return (
                    <option key={i} value={item.name}>
                      {" "}
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
            {state.idIssueDistrict.hasErrors && <p className="text-danger">{state.idIssueDistrict.message}</p>}
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-id_issue_date_bs">ID issue Date(B.S)*</label>
              <div className="input-group">
                <input value={state.idIssueDateBs.value} type="text" id="personal_information-id_issue_date_bs" className="form-control" required />
                <Calendar className="form-control" value={state.idIssueDateBs.value} onChange={handleIdIssueDateBs} theme="deepdark" />
              </div>
              {state.idIssueDateBs.hasErrors && <p className="text-danger">{state.idIssueDateBs.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-id_issued_date_ad">ID Issue Date(A.D)*</label>
              <div className="input-group">
                <input value={state.idIssueDate.value} type="text" id="personal_information-id_issued_date_ad" className="form-control" required />
                <DatePicker className="form-control" selected={state.idIssueDate.value} onChange={handleIdIssueDate} />
              </div>
              {state.idIssueDate.hasErrors && <p className="text-danger">{state.idIssueDate.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-pan">Permanent Account Number(PAN)</label>
              <div className="input-group">
                <input value={state.pan.value} onBlur={(e) => dispatch({ type: "validatePAN", value: e.target.value })} value={state.pan.value} onChange={(e) => dispatch({ type: "panChange", value: e.target.value, field: "pan" })} type="number" id="personal_information-pan" className="form-control" />
              </div>
              {state.pan.hasErrors && <p className="text-danger">{state.pan.message}</p>}
              {state.pan.checkingNow && <p className="text-danger">{state.pan.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer ">
        <span className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </span>
      </div>
    </div>
  )
}

export default withRouter(PersonalInfo)
