import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Calendar from "@sbmdkl/nepali-datepicker-reactjs"
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css"
import adbs from "ad-bs-converter"
import districts from "../../Assets/district-list-nepal"
import { useImmerReducer } from "use-immer"
function PersonalInfo() {
  const [errors, setErrors] = useState([])
  const [fullName, setFullName] = useState("")
  const [mobile, setMobile] = useState("")
  const [bsDate, setBsDate] = useState("")
  const [adDate, setAdDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const initialState = {
    fullName: {
      value: "",
      hasErrors: false,
      message: "",
    },
    mobile: {
      value: "",
      hasErrors: false,
      message: "",
    },
    email: {
      value: "",
      hasErrors: false,
      message: "",
    },
    dob: {
      value: "",
      hasErrors: false,
      message: "",
    },
    gender: {
      value: "",
      hasErrors: false,
      message: "",
    },
    maritalStatus: {
      value: "",
      hasErrors: false,
      message: "",
    },
    accountType: {
      value: "",
      hasErrors: false,
      message: "",
    },
    nationality: {
      value: "",
      hasErrors: false,
      message: "",
    },
    typeOfId: {
      value: "",
      hasErrors: false,
      message: "",
    },
    idNo: {
      value: "",
      hasErrors: false,
      message: "",
    },
    idIssueDistrict: {
      value: "",
      hasErrors: false,
      message: "",
    },
    idIssueDate: {
      value: "",
      hasErrors: false,
      message: "",
    },
    pan: {
      value: "",
      hasErrors: false,
      message: "",
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "default":
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  const handleDate = ({ bsDate, adDate }) => {
    setBsDate({ date: bsDate })
    setAdDate({ date: adDate })
    // console.log("startdate", startDate)
    // console.log(new Date(adDate))
    setStartDate(new Date(adDate))
    // console.log("startdate changed", startDate)
    // console.log(new Date(adDate).toISOString())
    // dispatch({ type: "dobChange", value: adDate })
  }

  function handleAdDate(date) {
    // console.log(date)
    setStartDate(date)
    setBsDate(date)
    // console.log(adbs.ad2bs(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`).ne, "ad2bs convereter")
    const convertedNepaliDate = adbs.ad2bs(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`).ne
    const formattedNepaliDate = `${convertedNepaliDate.year}-${convertedNepaliDate.month}-${convertedNepaliDate.day}`
    console.log("formatted nepali date", formattedNepaliDate)
    setBsDate({ date: formattedNepaliDate })
    // dispatch({ type: "dobChange", value: startDate })
  }
  useEffect(() => {
    console.log("hello from the personal info")
    for (const key in state) {
      // console.log(`${key}: ${state[key]}`)
      var arr = state[key]
      console.log("arr", arr.hasErrors)
    }
  }, [])
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-full_name">Full Name*</label>
              <div className="input-group">
                <input type="text" id="personal_information-full_name" className="form-control" placeholder="Your Full Name" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-mobile">Mobile*</label>
              <div className="input-group">
                <input type="text" id="personal_information-mobile" placeholder="Your 10 digit phone number" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-email">Email*</label>
              <div className="input-group">
                <input type="text" id="dob personal_information-email" placeholder="Your email address" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="personal_information-date_of_birth_bs">Date of Birth (B.S.)*</label>
                  <div className="input-group">
                    <input type="text" id="personal_information-date_of_birth_bs" className="form-control" required value={bsDate.date} />
                    <Calendar value={bsDate.date} onChange={handleDate} theme="deepdark" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="personal_information-date_of_birth_ad">Date of Birth (A.D.)*</label>
                  <div className="input-group">
                    <input value={adDate.date} type="text" id="personal_information-date_of_birth_ad" className="form-control" required />
                    <DatePicker selected={startDate} onChange={handleAdDate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-gender">Gender*</label>
              <div className="input-group">
                <select name="" id="personal_information-gender" className="form-control" required>
                  <option value="">Select your gender</option>
                  <option value="1">Decline TO Answer</option>
                  <option value="2">Male</option>
                  <option value="3">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-martial_status">Martial Status*</label>
              <div className="input-group">
                <select name="" id="personal_information-martial_status" className="form-control">
                  <option value="">Select your martial status</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-account_type">Account Type*</label>
              <div className="input-group">
                <select name="" id="personal_information-account_type" className="form-control" required>
                  <option value="">Select your account type</option>
                  <option value="1">Nepalese</option>
                  <option value="2">NRN - Non Residental Nepali</option>
                  <option value="3">Foreign</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-nationality">Nationality*</label>
              <div className="input-group">
                <select name="" id="personal_information-nationality" className="form-control" required>
                  <option value="">Select Nationality</option>
                  <option value="1">Nepalese</option>
                  <option value="2">NRN - Non Residental Nepali</option>
                  <option value="3">Foreign</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>

          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-type_of_identity_card">Type of Identitiy card*</label>
              <div className="input-group">
                <select name="" id="personal_information-type_of_identity_card" className="form-control" required>
                  <option value="">Choose your type of ID</option>
                  <option value="1">Citizenship</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-identification_number">Identification Number*</label>
              <div className="input-group">
                <input type="text" id="personal_information-identification_number" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-id_issued_district">ID Issued District*</label>
              <select name="" id="personal_information-id_issued_district" className="form-control" required>
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
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-id_issue_date_bs">ID issue Date(B.S)*</label>
              <div className="input-group">
                <input type="text" id="personal_information-id_issue_date_bs" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-id_issued_date_ad">ID Issue Date(A.D)*</label>
              <div className="input-group">
                <input type="text" id="personal_information-id_issued_date_ad" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="personal_information-pan">Permanent Account Number(PAN)</label>
              <div className="input-group">
                <input type="text" id="personal_information-pan" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer ">
        <span className="btn btn-primary">Submit</span>
      </div>
    </div>
  )
}

export default PersonalInfo
