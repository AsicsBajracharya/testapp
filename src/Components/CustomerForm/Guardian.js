import React, { useEffect, useState } from "react"
import Calendar from "@sbmdkl/nepali-datepicker-reactjs"
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import adbs from "ad-bs-converter"
import districts from "../../Assets/district-list-nepal"
import provinceData from "../../Assets/province-district.json"
import DocumentCard from "./documents/DocumentCard"
import { useImmerReducer } from "use-immer"
import FormDispatch from "./FormDispatch"
import { useContext } from "react"
import { withRouter } from "react-router-dom"

function Guardian(props) {
  const formDispatch = useContext(FormDispatch)
  // // const [displayPicture, setDisplayPicture] = useState("")
  // const [thumbrpintLeft, setThumbprintLeft] = useState("")
  // const [thumbrpintRight, setThumbprintRight] = useState("")
  // const [citizenshipBack, setCitizenshipBack] = useState("")
  // const [citizenshipFront, setCitizenshipFront] = useState("")
  // const [signature, setSignature] = useState(null)

  // const [errors, setErros] = useState("")
  const initialState = {
    errorCount: 0,
    sendCount: 0,
    formData: {
      nameOfGuardian: {
        name: "nameOfGuardian",
        value: "",
        hasErrors: false,
        message: "",
      },
      relationshipWithApplicant: {
        name: "relationshipWithApplicant",
        value: "",
        hasErrors: false,
        message: "",
      },
      fathersName: {
        name: "fathersName",
        value: "",
        hasErrors: false,
        message: "",
      },
      grandFathersName: {
        name: "grandFathersName",
        value: "",
        hasErrors: false,
        message: "",
      },
      mobile: {
        name: "mobile",
        value: "",
        hasErrors: false,
        message: "",
      },
      email: {
        name: "email",
        value: "",
        hasErrors: false,
        message: "",
      },
      typeOfIdCard: {
        name: "typeOfIdCard",
        value: "",
        hasErrors: false,
        message: "",
      },
      idNo: {
        name: "idNo",
        value: "",
        hasErrors: false,
        message: "",
      },
      idIssueDistrict: {
        name: "idIssueDistrict",
        value: "",
        hasErrors: false,
        message: "",
      },
      idIssueDateBs: {
        name: "idIssueDateBs",
        value: "",
        hasErrors: false,
        message: "",
      },
      idIssueDate: {
        name: "idIssueDate",
        value: "",
        hasErrors: false,
        message: "",
        dateFormatted: "",
      },
      pan: {
        name: "pan",
        value: "",
        hasErrors: false,
        message: "",
      },

      addresses: {
        temporary: {
          country: {
            name: "country",
            value: "",
            hasErrors: false,
            message: "",
          },
          province: {
            name: "province",
            value: "",
            hasErrors: false,
            message: "",
            list: [],
          },
          block_number: {
            name: "block_number",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          phone_number: {
            name: " phone_number",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          ward_number: {
            name: "ward_number",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          locality: {
            name: "locality",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          municipality: {
            name: "municipality",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          city: {
            name: "city",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          district: {
            name: "district",
            value: "",
            hasErrors: false,
            message: "",
            list: [],
            listToShow: [],
            touched: false,
          },
        },
        permanent: {
          country: {
            name: "country",
            value: "",
            hasErrors: false,
            message: "",
          },
          province: {
            name: "province",
            value: "",
            hasErrors: false,
            message: "",
            list: [],
          },
          block_number: {
            name: "block_number",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          phone_number: {
            name: " phone_number",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          ward_number: {
            name: "ward_number",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          locality: {
            name: "locality",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          municipality: {
            name: "municipality",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          city: {
            name: "city",
            value: "",
            hasErrors: false,
            message: "",
            touched: false,
          },
          district: {
            name: "district",
            value: "",
            hasErrors: false,
            message: "",
            list: [],
            listToShow: [],
            touched: false,
          },
        },
      },
      documents: {
        displayPicture: {
          value: "",
          hasErrors: false,
          message: "",
          required: true,
        },
        thumbrpintLeft: {
          value: "",
          hasErrors: false,
          message: "",
          required: true,
        },
        thumbrpintRight: {
          value: "",
          hasErrors: false,
          message: "",
          required: true,
        },
        citizenshipBack: {
          value: "",
          hasErrors: false,
          message: "",
          required: true,
        },
        citizenshipFront: {
          value: "",
          hasErrors: false,
          message: "",
          required: true,
        },
        signature: {
          value: "",
          hasErrors: false,
          message: "",
          required: true,
        },
        birthCertificate: {
          value: "",
          hasErrors: false,
          message: "",
          required: false,
        },
      },
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "inputChange":
        for (const key in draft.formData) {
          if (draft.formData[key].name == action.field) {
            // console.log(action.field, "fullname")
            draft.formData[key].hasErrors = false
            draft.formData[key].touched = true
            draft.formData[key].value = action.value
            if (draft.formData[key].name == "mobile") {
              if (action.value.length > 10) {
                draft.formData[key].hasErrors = true
                draft.formData[key].message = "mobile number cannot exceed 10 digits"
              }
            }
            if (draft.formData[key].name == "pan") {
              if (action.value.length > 9) {
                draft.formData[key].hasErrors = true
                draft.formData[key].message = "pan number cannot exceed 9 digits"
              }
            }
          }
        }
        return
      case "inputBlur":
        console.log("this reducer hit")
        for (const key in draft.formData) {
          if (draft.formData[key].name == action.field) {
            console.log("action.value", action.value)
            if (action.value.trim() == "") {
              draft.formData[key].hasErrors = true
              draft.formData[key].message = `This field cannot be blank`
              return
            }

            draft.formData[key].value = action.value
            if (draft.formData[key].name == "email") {
              if (!/^\S+@\S+$/.test(draft.formData.email.value)) {
                draft.formData.email.hasErrors = true
                draft.formData.email.message = "You must provide a valid email address"
                return
              }
            }
            if (draft.formData[key].name == "mobile") {
              if (action.value.length != 10) {
                draft.formData[key].hasErrors = true
                draft.formData[key].message = "mobile number must be 10 digits"
              }
            }
            if (draft.formData[key].name == "pan") {
              console.log("this is a pan number")
              if (action.value.length != 9) {
                draft.formData[key].hasErrors = true
                draft.formData[key].message = "pan number must be 10 digits"
              }
            }
          }
        }
        return
      case "idIssueDateChange":
        console.log("id issue date change reducer hit")
        draft.formData.idIssueDate.touched = true
        draft.formData.idIssueDate.hasErrors = false
        draft.formData.idIssueDate.value = action.value
        draft.formData.idIssueDate.dateFormatted = formatDate(action.value)
        return
      case "renderProvinces":
        console.log("this reducer was hit at the render proinces")
        if (!draft.formData.addresses.temporary.province.list.length) {
          for (const key in provinceData) {
            draft.formData.addresses.temporary.province.list.push(key)
            draft.formData.addresses.permanent.province.list.push(key)
          }
        }
        return
      case "renderDistricts":
        for (const key in provinceData) {
          provinceData[key].map((item, i) => {
            draft.formData.addresses.temporary.district.list.push(item.district)
            draft.formData.addresses.permanent.district.list.push(item.district)
          })
        }
        draft.formData.addresses.temporary.district.listToShow = draft.formData.addresses.temporary.district.list
        draft.formData.addresses.permanent.district.listToShow = draft.formData.addresses.permanent.district.list
        return
      case "temporaryInputChange":
        for (const key in draft.formData.addresses.temporary) {
          if (draft.formData.addresses.temporary[key].name == action.field) {
            draft.formData.addresses.temporary[key].hasErrors = false
            draft.formData.addresses.temporary[key].value = action.value
            if (draft.formData.addresses.temporary[key].name == "province") {
              draft.formData.addresses.temporary.district.listToShow = []
              draft.formData.addresses.temporary.district.value = ""
              let selectedProvince
              for (const key in provinceData) {
                selectedProvince = provinceData[action.value]
              }
              selectedProvince.map((item, i) => {
                draft.formData.addresses.temporary.district.listToShow.push(item.district)
              })
            }
          }
        }
        return
      case "permanentInputChange":
        for (const key in draft.formData.addresses.permanent) {
          if (draft.formData.addresses.permanent[key].name == action.field) {
            draft.formData.addresses.permanent[key].hasErrors = false
            draft.formData.addresses.permanent[key].value = action.value
            if (draft.formData.addresses.permanent[key].name == "province") {
              draft.formData.addresses.permanent.district.listToShow = []
              draft.formData.addresses.permanent.district.value = ""
              let selectedProvince
              for (const key in provinceData) {
                selectedProvince = provinceData[action.value]
              }
              selectedProvince.map((item, i) => {
                draft.formData.addresses.permanent.district.listToShow.push(item.district)
              })
            }
          }
        }
        return
      case "setDisplayPicture":
        draft.formData.documents.displayPicture.hasErrors = false
        draft.formData.documents.displayPicture.value = action.value
        return
      case "setThumbprintLeft":
        draft.formData.documents.thumbrpintLeft.hasErrors = false
        draft.formData.documents.thumbrpintLeft.value = action.value
        return
      case "setThumbprintRight":
        draft.formData.documents.thumbrpintRight.hasErrors = false
        draft.formData.documents.thumbrpintRight.value = action.value
        return
      case "setCitizenshipBack":
        draft.formData.documents.citizenshipBack.hasErrors = false
        draft.formData.documents.citizenshipBack.value = action.value
        return
      case "setCitizenshipFront":
        draft.formData.documents.citizenshipFront.hasErrors = false
        draft.formData.documents.citizenshipFront.value = action.value
        return
      case "setSignature":
        draft.formData.documents.signature.hasErrors = false
        draft.formData.documents.signature.value = action.value
        return
      case "setBirthCertificate":
        draft.formData.documents.birthCertificate.hasErrors = false
        draft.formData.documents.birthCertificate.value = action.value
        return
      case "validateForm":
        //check for errors
        console.log("handle form reducer thit at gurdfains")
        draft.errorCount = 0
        for (const key in draft.formData) {
          if (draft.formData[key].value == "") {
            console.log("there is an errror")
            draft.errorCount++
            console.log(draft.formData[key].name)
            console.log(draft.errorCount)
            draft.formData[key].hasErrors = true
            draft.formData[key].message = "This field cannot be empty"
          }
        }
        //check for errors in address section
        for (const key in draft.formData.addresses.temporary) {
          if (draft.formData.addresses.temporary[key].value == "") {
            console.log("there is an errror in temporary address section")
            draft.errorCount++
            console.log(draft.formData.addresses.temporary[key].name)
            console.log(draft.errorCount)
            draft.formData.addresses.temporary[key].hasErrors = true
            draft.formData.addresses.temporary[key].message = "This field cannot be empty"
          }
        }
        for (const key in draft.formData.addresses.permanent) {
          if (draft.formData.addresses.permanent[key].value == "") {
            console.log("there is an errror in permanent address section")
            draft.errorCount++
            console.log(draft.formData.addresses.permanent[key].name)
            console.log(draft.errorCount)
            draft.formData.addresses.permanent[key].hasErrors = true
            draft.formData.addresses.permanent[key].message = "This field cannot be empty"
          }
        }
        //check for errors in the documents sectoin
        for (const key in draft.formData.documents) {
          console.log("the loop now runs for the documents seciton foo the guardian")
          if (draft.formData.documents[key].value == "") {
            draft.formData.documents[key].hasErrors = true
            draft.formData.documents[key].message = "this document is required"
          }
        }

        //dispatch the state if error count is o0
        //check which elemnt has Error
        if (!draft.errorCount) {
          draft.sendCount++
          console.log("there aren o errors ont he page ")
        }

        return
      case "default":
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    dispatch({ type: "renderProvinces" })
    dispatch({ type: "renderDistricts" })
  }, [])

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

  function handleSubmit() {
    console.log("handle submit function")
    dispatch({ type: "validateForm" })
  }
  useEffect(() => {
    if (state.sendCount) {
      console.log("form dispatch form the guardians info here")
      formDispatch({
        type: "saveGuardian",
        value: {
          type: "1",
          full_name: state.formData.nameOfGuardian.value,
          email: state.formData.email.value,
          relation: state.formData.relationshipWithApplicant.value,
          father_name: state.formData.fathersName.value,
          grand_father_name: state.formData.grandFathersName.value,
          mobile: state.formData.mobile.value,
          addresses: [
            {
              type: "1",
              block_number: state.formData.addresses.temporary.block_number.value,
              phone_number: state.formData.addresses.temporary.phone_number.value,
              ward_number: state.formData.addresses.temporary.ward_number.value,
              locality: state.formData.addresses.temporary.locality.value,
              municipality: state.formData.addresses.temporary.municipality.value,
              district: state.formData.addresses.temporary.district.value,
              province: state.formData.addresses.temporary.province.value,
              country: state.formData.addresses.temporary.country.value,
            },
            {
              type: "2",
              block_number: state.formData.addresses.permanent.block_number.value,
              phone_number: state.formData.addresses.permanent.phone_number.value,
              ward_number: state.formData.addresses.permanent.ward_number.value,
              locality: state.formData.addresses.permanent.locality.value,
              municipality: state.formData.addresses.permanent.municipality.value,
              district: state.formData.addresses.permanent.district.value,
              province: state.formData.addresses.permanent.province.value,
              country: state.formData.addresses.permanent.country.value,
            },
          ],
          personal_informations: {
            identity_card_type: state.formData.typeOfIdCard.value,
            identity_card_number: state.formData.idNo.value,
            identity_card_issue_district: state.formData.idIssueDistrict.value,
            identity_card_issue_date: state.formData.idIssueDate.dateFormatted,
            pan_number: "",
          },
          documents: {
            photo: state.formData.documents.displayPicture.value,
            signature: state.formData.documents.signature.value,
            gov_issued_id_front: state.formData.documents.citizenshipBack.value,
            gov_issued_id_back: state.formData.documents.citizenshipFront.value,
          },
        },
      })
      //dispatch form data from here
      props.history.push("/customers/register/address")
    }
  }, [state.sendCount])
  function setDisplayPicture(e) {
    dispatch({ type: "setDisplayPicture", value: e })
  }
  function setThumbprintLeft(e) {
    dispatch({ type: "setThumbprintLeft", value: e })
  }
  function setThumbprintRight(e) {
    dispatch({ type: "setThumbprintRight", value: e })
  }
  function setCitizenshipBack(e) {
    dispatch({ type: "setCitizenshipBack", value: e })
  }
  function setCitizenshipFront(e) {
    dispatch({ type: "setCitizenshipFront", value: e })
  }
  function setSignature(e) {
    dispatch({ type: "setSignature", value: e })
  }
  function setBirthCertificate(e) {
    dispatch({ type: "setBirthCertificate", value: e })
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Guardian's Information</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="guardian-name_of_guardian">Name of Guardian*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "nameOfGuardian" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "nameOfGuardian" })} type="text" id="guardian-name_of_guardian" className="form-control" placeholder="Guardian's Full Name" required />
                </div>
                {state.formData.nameOfGuardian.hasErrors && <p className="text-danger">{state.formData.nameOfGuardian.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="guaridan-relationship_with_applicant">Relationship with applicant*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "relationshipWithApplicant" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "relationshipWithApplicant" })} type="text" id="guaridan-relationship_with_applicant" placeholder="Relationship with applicant" className="form-control" required />
                </div>
                {state.formData.relationshipWithApplicant.hasErrors && <p className="text-danger">{state.formData.relationshipWithApplicant.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="guardian-fathers_name">Father's Name*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "fathersName" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "fathersName" })} type="text" id="dob guardian-fathers_name" placeholder="Father's Name" className="form-control" required />
                </div>
                {state.formData.fathersName.hasErrors && <p className="text-danger">{state.formData.fathersName.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="guardian-grandFathers_name">grandFather's Name*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "grandFathersName" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "grandFathersName" })} type="text" id="dob guardian-grandFathers_name" placeholder="grandFather's Name" className="form-control" required />
                </div>
                {state.formData.grandFathersName.hasErrors && <p className="text-danger">{state.formData.grandFathersName.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-mobile">Mobile*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "mobile" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "mobile" })} type="text" id="personal_information-mobile" placeholder="Your 10 digit phone number" className="form-control" required />
                </div>
                {state.formData.mobile.hasErrors && <p className="text-danger">{state.formData.mobile.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-email">Email*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "email" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "email" })} type="text" id="dob personal_information-email" placeholder="Your email address" className="form-control" required />
                </div>
                {state.formData.email.hasErrors && <p className="text-danger">{state.formData.email.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-type_of_identity_card">Type of Identitiy card*</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "typeOfIdCard" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "typeOfIdCard" })} name="" id="personal_information-type_of_identity_card" className="form-control" required>
                    <option value="">Choose your type of ID</option>
                    <option value="1">Citizenship</option>
                  </select>
                </div>
                {state.formData.typeOfIdCard.hasErrors && <p className="text-danger">{state.formData.typeOfIdCard.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-identification_number">Identification Number*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "idNo" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "idNo" })} type="text" id="personal_information-identification_number" className="form-control" />
                </div>
                {state.formData.idNo.hasErrors && <p className="text-danger">{state.formData.idNo.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-id_issued_district">ID Issued District*</label>
                <select onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "idIssueDistrict" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "idIssueDistrict" })} name="" id="personal_information-id_issued_district" className="form-control" required>
                  {districts.map((item, i) => {
                    return <option value={item.name}> {item.name}</option>
                  })}
                </select>
              </div>
              {state.formData.idNo.hasErrors && <p className="text-danger">{state.formData.idNo.message}</p>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-id_issue_date_bs">ID issue Date(B.S)*</label>
                <div className="input-group">
                  <input value={state.formData.idIssueDateBs.value} type="text" id="personal_information-id_issue_date_bs" className="form-control" required />
                  <Calendar className="form-control" value={state.formData.idIssueDateBs.value} onChange={handleIdIssueDateBs} theme="deepdark" />
                </div>
                {state.formData.idIssueDateBs.hasErrors && <p className="text-danger">{state.formData.idIssueDateBs.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-id_issued_date_ad">ID Issue Date(A.D)*</label>
                <div className="input-group">
                  <input value={state.formData.idIssueDate.value} type="text" id="personal_information-id_issued_date_ad" className="form-control" required />
                  <DatePicker className="form-control" selected={state.formData.idIssueDate.value} onChange={handleIdIssueDate} />
                </div>
                {state.formData.idIssueDate.hasErrors && <p className="text-danger">{state.formData.idIssueDate.message}</p>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="personal_information-pan">Permanent Account Number(PAN)</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "pan" })} onBlur={(e) => dispatch({ type: "inputBlur", value: e.target.value, field: "pan" })} value={state.formData.pan.value} type="number" id="personal_information-pan" className="form-control" />
                </div>
                {state.formData.pan.hasErrors && <p className="text-danger">{state.formData.pan.message}</p>}
              </div>
            </div>
          </div>
          <h4>Guardian's Current Address</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-country">Country*</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "country" })} name="" id="address-country" className="form-control" placeholder="Select a country" required>
                    <option value="Nepal">Nepal</option>
                    <option value="inida">India</option>
                  </select>
                </div>
                {state.formData.addresses.temporary.country.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.country.message}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-country">Province*</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "province" })} name="" id="address-country" className="form-control" placeholder="Select a Province" required>
                    {state.formData.addresses.temporary.province.list.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      )
                    })}
                  </select>
                </div>
                {state.formData.addresses.temporary.province.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.province.message}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="guardian-temporary_district">District</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "district" })} name="" id="guardian-temporary_district" className="form-control">
                    {state.formData.addresses.temporary.district.listToShow.map((item, i) => {
                      return <option value={item}>{item}</option>
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-city">City</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "city" })} value={state.formData.addresses.temporary.city.value} type="text" id="address-city" className="form-control" placeholder="Your City Name" />
                </div>
              </div>
              {state.formData.addresses.temporary.city.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.city.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-municipality">Municipality*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "municipality" })} value={state.formData.addresses.temporary.municipality.value} type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" required />
                </div>
              </div>
              {state.formData.addresses.temporary.municipality.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.municipality.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-locality_tole">Locality/Tole*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "locality" })} value={state.formData.addresses.temporary.locality.value} type="text" id="address-locality_tole" className="form-control" placeholder="Enter your phones number" required />
                </div>
              </div>
              {state.formData.addresses.temporary.locality.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.locality.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-ward_no">Ward No*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "ward_number" })} value={state.formData.addresses.temporary.ward_number.value} type="text" id="address-ward_no" className="form-control" placeholder="Enter your ward number" required />
                </div>
              </div>
              {state.formData.addresses.temporary.ward_number.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.ward_number.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-block_no">Block No</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: "block_number" })} value={state.formData.addresses.temporary.block_number.value} type="text" id="address-block_no" className="form-control" placeholder="Enter your block number" />
                </div>
              </div>
              {state.formData.addresses.temporary.block_number.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.block_number.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-telephone_number">Telephone Number</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "temporaryInputChange", value: e.target.value, field: " phone_number" })} value={state.formData.addresses.temporary.phone_number.value} type="text" id="address-telephone_number" className="form-control" placeholder="Enter your phones number" />
                </div>
              </div>
              {state.formData.addresses.temporary.phone_number.hasErrors && <div class="text-danger">{state.formData.addresses.temporary.phone_number.message}</div>}
            </div>
          </div>
          <h4>Guardian's Permanent Address</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-country">Country*</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "country" })} name="" id="address-country" className="form-control" placeholder="Select a country" required>
                    <option value="Nepal">Nepal</option>
                    <option value="inida">India</option>
                  </select>
                </div>
                {state.formData.addresses.permanent.country.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.country.message}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-country">Province*</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "province" })} name="" id="address-country" className="form-control" placeholder="Select a Province" required>
                    {state.formData.addresses.permanent.province.list.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      )
                    })}
                  </select>
                </div>
                {state.formData.addresses.permanent.province.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.province.message}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="guardian-permanent_district">District</label>
                <div className="input-group">
                  <select onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "district" })} name="" id="guardian-permanent_district" className="form-control">
                    {state.formData.addresses.permanent.district.listToShow.map((item, i) => {
                      return <option value={item}>{item}</option>
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-city">City</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "city" })} value={state.formData.addresses.permanent.city.value} type="text" id="address-city" className="form-control" placeholder="Your City Name" />
                </div>
              </div>
              {state.formData.addresses.permanent.city.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.city.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-municipality">Municipality*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "municipality" })} value={state.formData.addresses.permanent.municipality.value} type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" required />
                </div>
              </div>
              {state.formData.addresses.permanent.municipality.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.municipality.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-locality_tole">Locality/Tole*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "locality" })} value={state.formData.addresses.permanent.locality.value} type="text" id="address-locality_tole" className="form-control" placeholder="Enter your phones number" required />
                </div>
              </div>
              {state.formData.addresses.permanent.locality.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.locality.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-ward_no">Ward No*</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "ward_number" })} value={state.formData.addresses.permanent.ward_number.value} type="text" id="address-ward_no" className="form-control" placeholder="Enter your ward number" required />
                </div>
              </div>
              {state.formData.addresses.permanent.ward_number.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.ward_number.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-block_no">Block No</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: "block_number" })} value={state.formData.addresses.permanent.block_number.value} type="text" id="address-block_no" className="form-control" placeholder="Enter your block number" />
                </div>
              </div>
              {state.formData.addresses.permanent.block_number.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.block_number.message}</div>}
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-telephone_number">Telephone Number</label>
                <div className="input-group">
                  <input onChange={(e) => dispatch({ type: "permanentInputChange", value: e.target.value, field: " phone_number" })} value={state.formData.addresses.permanent.phone_number.value} type="text" id="address-telephone_number" className="form-control" placeholder="Enter your phones number" />
                </div>
              </div>
              {state.formData.addresses.permanent.phone_number.hasErrors && <div class="text-danger">{state.formData.addresses.permanent.phone_number.message}</div>}
            </div>
          </div>
        </div>
      </div>
      <DocumentCard setDisplayPicture={setDisplayPicture} setThumbprintLeft={setThumbprintLeft} setThumbprintRight={setThumbprintRight} setCitizenshipBack={setCitizenshipBack} setCitizenshipFront={setCitizenshipFront} setSignature={setSignature} setError={state.formData.documents} />
      <span className="btn btn-primary" onClick={handleSubmit}>
        Next
      </span>
    </>
  )
}

export default withRouter(Guardian)
