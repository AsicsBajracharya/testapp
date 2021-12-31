import React, { useEffect, useRef } from "react"
import { useImmerReducer, userImmerReducer } from "use-immer"
const mainCategory = [
  {
    id: "1",
    name: "Personal Information",
    data: [
      {
        id: "1",
        name: "Full Name",
        nameForForm: "fullname",
      },
      {
        id: "2",
        name: "Mobile",
        nameForForm: "mobile",
      },
      {
        id: "3",
        name: "Email",
        nameForForm: "email",
      },
      {
        id: "4",
        name: "DOB",
        nameForForm: "dob",
      },
      {
        id: "5",
        name: "Gender",
        nameForForm: "gender",
      },
      {
        id: "6",
        name: "Marital Status",
        nameForForm: "maritial_status",
      },
      {
        id: "7",
        name: "Nationality",
        nameForForm: "nationality",
      },
      {
        id: "8",
        name: "Account Type",
        nameForForm: "account_type",
      },
      {
        id: "9",
        name: "id Card Number",
        nameForForm: "id_card_number",
      },
      {
        id: "10",
        name: "id Card Type",
        nameForForm: "id_card_type",
      },
      {
        id: "11",
        name: "id Card Issue Date",
        nameForForm: "id_issue_date",
      },
      {
        id: "12",
        name: "id Card Issue District",
        nameForForm: "id_card_issuei_dstrict",
      },
      {
        id: "13",
        name: "PAN",
        nameForForm: "pan",
      },
    ],
  },
  {
    id: "2",
    name: "Guardian",
    data: [
      {
        id: "1",
        name: "Name Of Guardian",
      },
      {
        id: "2",
        name: "Relationship With Applicant",
      },
      {
        id: "3",
        name: "Fathers Name",
      },
      {
        id: "4",
        name: "GrandFathers Name",
      },
      {
        id: "5",
        name: "Mobile",
      },
      {
        id: "6",
        name: "Email",
      },
      {
        id: "7",
        name: "Nationality",
      },
      {
        id: "8",
        name: "id Card Type",
      },
      {
        id: "9",
        name: "Id Number",
      },
      {
        id: "10",
        name: "Id Issue District",
      },
      {
        id: "11",
        name: "Id Issue Date",
      },
      {
        id: "12",
        name: "PAN",
      },
      {
        id: "13",
        name: "Temporary Country",
      },
      {
        id: "14",
        name: "Temporary Province",
      },
      {
        id: "15",
        name: "Temporary District",
      },
      {
        id: "16",
        name: "Temporary Municipality",
      },
      {
        id: "17",
        name: "Temporary Localitty",
      },
      {
        id: "18",
        name: "Temporary Ward no",
      },
      {
        id: "19",
        name: "Temporary Block no",
      },
      {
        id: "20",
        name: "Permanent Country",
      },
      {
        id: "21",
        name: "Permanent Province",
      },
      {
        id: "22",
        name: "Permanent District",
      },
      {
        id: "23",
        name: "Permanent Municipality",
      },
      {
        id: "24",
        name: "Permanent Locality",
      },
      {
        id: "25",
        name: "Permanent Ward no",
      },
      {
        id: "26",
        name: "Permanent Block no",
      },
    ],
  },
  {
    id: "3",
    name: "Address",
    data: [
      {
        id: "1",
        name: "Temporary Country",
      },
      {
        id: "2",
        name: "Temporary Province",
      },
      {
        id: "3",
        name: "Temporary District",
      },
      {
        id: "4",
        name: "Temporary Municipality",
      },
      {
        id: "5",
        name: "Temporary Locality",
      },
      {
        id: "6",
        name: "Temporary Ward No",
      },
      {
        id: "7",
        name: "Temporary Block No",
      },
      {
        id: "8",
        name: "Permanent Country",
      },
      {
        id: "9",
        name: "Permanent Province",
      },
      {
        id: "10",
        name: "Permanent District",
      },
      {
        id: "11",
        name: "Permanent Municipality",
      },
      {
        id: "12",
        name: "Permanent Locality",
      },
      {
        id: "13",
        name: "Permanent Ward No",
      },
      {
        id: "14",
        name: "Permanent Block No",
      },
    ],
  },
  {
    id: "4",
    name: "Family",
    data: [
      {
        id: "1",
        name: "Fathers Name",
      },
      {
        id: "2",
        name: "Grandfathers Name",
      },
      {
        id: "3",
        name: "Mothers Name",
      },
      {
        id: "4",
        name: "Spouses Name",
      },
      {
        id: "5",
        name: "Sons Name",
      },
      {
        id: "6",
        name: "Daughters Name",
      },
      {
        id: "7",
        name: "Father in Laws Name",
      },
      {
        id: "8",
        name: "Daughters Name",
      },
    ],
  },
  {
    id: "5",
    name: "Nominee",
    data: [
      {
        id: "1",
        name: "Name of Nominee",
      },
      {
        id: "2",
        name: "Relationship with Applicant",
      },
      {
        id: "3",
        name: "Fathers Name",
      },
      {
        id: "4",
        name: "Grandfathers Name",
      },
      {
        id: "5",
        name: "Mobile",
      },
      {
        id: "6",
        name: "Email",
      },
      {
        id: "7",
        name: "Nationality",
      },
      {
        id: "8",
        name: "ID card type",
      },
      {
        id: "9",
        name: "ID card number",
      },
      {
        id: "10",
        name: "ID issue district",
      },
      {
        id: "11",
        name: "id issue date",
      },
      {
        id: "12",
        name: "PAN",
      },
      {
        id: "13",
        name: "Temporary Country",
      },
      {
        id: "14",
        name: "Temporary Province",
      },
      {
        id: "15",
        name: "Temporary District",
      },
      {
        id: "16",
        name: "Temporary Municipality",
      },
      {
        id: "17",
        name: "Temporary Locality",
      },
      {
        id: "18",
        name: "Temporary Ward No",
      },
      {
        id: "19",
        name: "Temporary Block No",
      },
      {
        id: "20",
        name: "Permanent Country",
      },
      {
        id: "21",
        name: "Permanent Province",
      },
      {
        id: "22",
        name: "Permanent District",
      },
      {
        id: "23",
        name: "Permanent Municipality",
      },
      {
        id: "24",
        name: "Permanent Locality",
      },
      {
        id: "25",
        name: "Permanent Ward No",
      },
      {
        id: "26",
        name: "Permanent Block No",
      },
    ],
  },
  {
    id: "6",
    name: "Occupation",
    data: [
      {
        id: "1",
        name: "Occupation",
      },
      {
        id: "2",
        name: "Business Type",
      },
      {
        id: "3",
        name: "Organization Name",
      },
      {
        id: "4",
        name: "Organization Address",
      },
      {
        id: "5",
        name: "Designation",
      },
      {
        id: "6",
        name: "Income Range",
      },
    ],
  },
  {
    id: "7",
    name: "Account",
    data: [
      {
        id: "1",
        name: "Type of Bank Account",
      },
      {
        id: "2",
        name: "Bank Name",
      },
      {
        id: "3",
        name: "Branch Name",
      },
      {
        id: "4",
        name: "Bank Account No",
      },
    ],
  },
  {
    id: "8",
    name: "Documents",
  },
]
function RejectPanel() {
  const initialState = {
    selectedCategory: "",
    subCategory: [],
    badgeList: [],
    rejectForm: {
      customers: {
        status: "5",
      },
      reason: {
        personal_information: {
          full_name: "",
          mobile: "",
          email: "",
          minor: "",
          dob: "",
          marital_status: "",
          gender: "",
          nationality: "",
          account_type: "",
          id_card_number: "",
          id_card_type: "",
          id_card_issue_date: "",
          id_card_issue_district: "",
          pan: "",
        },
        address: {
          temporary_country: "",
          temporary_province: "",
          temporary_district: "",
          temporary_municipality: "",
          temporary_locality: "",
          temporary_ward_no: "",
          temporary_street: "",
          temporary_telephone_no: "",
          temporary_block_no: "",
          permanent_country: "",
          permanent_province: "",
          permanent_district: "",
          permanent_municipality: "",
          permanent_locality: "",
          permanent_ward_no: "",
          permanent_street: "",
          permanent_telephone_no: "",
          permanent_block_no: "",
        },
        family: {
          fathers_name: "",
          mothers_name: "",
          spouses_name: "",
          daughter_in_laws_name: "sdfa",
          father_in_laws_name: "",
          sons_name: "",
        },
        nominee: {
          name_of_nominee: "",
          relationship_with_applicant: "",
          fathers_name: "",
          grandfathers_name: "",
          mobile: "",
          email: "",
          nationality: "",
          id_card_type: "",
          id_card_number: "",
          id_issue_district: "",
          id_expiry_date: "",
          id_issue_date: "",
          pan: "",
          permanent_country: "",
          permanent_province: "",
          permanent_district: "",
          permanent_municipality: "",
          permanent_ward_no: "",
          permanent_street: "",
          permanent_telephone_no: "",
          permanent_block_no: "",
          temporary_country: "",
          temporary_province: "",
          temporary_district: "",
          temporary_municipality: "",
          temporary_locality: "",
          temporary_ward_no: "",
          temporary_street: "",
          temporary_telephone_no: "",
          temporary_block_no: "",
        },
        guardian: {
          name_of_guardian: "",
          relationship_with_applicant: "",
          fathers_name: "",
          grandfathers_name: "",
          mobile: "",
          email: "",
          nationality: "",
          id_card_type: "",
          id_number: "",
          id_issue_district: "",
          id_issue_date: "",
          pan: "",
          temporary_country: "",
          temporary_province: "",
          temporary_district: "",
          temporary_municipality: "",
          temporary_locality: "",
          temporary_ward_no: "",
          temporary_street: "",
          temporary_telephone_no: "",
          temporary_block_no: "",
          temporary_muncipality: "",
          temporary_block: "",
          permanent_country: "",
          permanent_province: "",
          permanent_district: "",
          permanent_municipality: "",
          permanent_locality: "",
          permanent_ward_no: "",
          permanent_street: "",
          permanent_telephone_no: "",
          permanent_block_no: "",
        },
        account: {
          type_of_bank_account: "",
          bank_name: "",
          branch_name: "",
          bank_account_no: "",
          demat_renewal: "",
        },
        occupation: {
          occupation: "",
          business_type: "",
          organization_name: "",
          organization_address: "",
          designation: "",
          income_range: "",
        },
        documents: {
          birth_certificate: "",
          display_picture: "",
          signature: "",
          ID_card_front: "",
          ID_card_back: "",
        },
      },
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "mainCategoryChange":
        draft.selectedCategory = action.value
        mainCategory.map((item, i) => {
          if (item.name == action.value) {
            console.log("selected category is ", item.name)
            draft.subCategory = item.data
          }
        })
        return
      case "subCategoryChange":
        if (!draft.badgeList.includes(`${draft.selectedCategory}-${action.value}`)) {
          draft.badgeList.push(`${draft.selectedCategory}-${action.value}`)
        }
        return
      case "removeBadgeAndInput":
        draft.badgeList &&
          draft.badgeList.map((item, i) => {
            if (item == action.value) {
              const index = draft.badgeList.indexOf(item)
              draft.badgeList.splice(index, 1)
            }
          })
        return
      case "emptyValue":
        console.log("action.category form the empty value reducer", action.category, "action.subcategory", action.subCategory)
        for (const key in draft.rejectForm.reason) {
          if (key == action.category) {
            for (const subKey in draft.rejectForm.reason[key]) {
              if (subKey == action.subCategory) {
                draft.rejectForm.reason[key][subKey] = ""
              }
            }
          }
        }
        return
      case "handleInputChange":
        console.log(action.name, "action")
        let mainCategoryForLoop = draft.rejectForm.reason
        for (const key in mainCategoryForLoop) {
          if (key == action.category) {
            console.log("category is", key)
            for (const subKey in mainCategoryForLoop[key]) {
              if (subKey == action.subCategory) {
                mainCategoryForLoop[key][subKey] = action.value
              }
            }
          }
        }
        return
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function mainCategoryChange(e) {
    console.log(e.target.value)
    dispatch({ type: "mainCategoryChange", value: e.target.value })
  }
  function subCategoryChange(e) {
    dispatch({ type: "subCategoryChange", value: e.target.value })
  }
  function deleteBadgeAndInput(e) {
    console.log("from the function", e.target.getAttribute("category"))
    dispatch({ type: "removeBadgeAndInput", value: e.target.getAttribute("data") })
    dispatch({ type: "emptyValue", category: e.target.getAttribute("category"), subCategory: e.target.getAttribute("subcategory") })
  }
  function handleSubmit(e) {
    console.log("fom submit button clicked")
    console.log(e.target.elements)
    e.preventDefault()
  }
  function handleChange(e) {
    // console.log("from the handle change", e.target, e.target.name, e.target.category, e.target.subCategory)
    dispatch({ type: "handleInputChange", value: e.target.value, subCategory: e.target.getAttribute("subCategory"), category: e.target.getAttribute("category") })
    console.log(e.target.getAttribute("category"), "category")
  }
  return (
    <div className="row">
      <div className="col-md-2">
        <div className="input-wrapper">
          <label htmlFor="mainCategory">Main Category</label>
          <select name="mainCategory" id="" className="form-control" onChange={mainCategoryChange}>
            {mainCategory.map((item, i) => {
              return (
                <option key={i} value={item.name}>
                  {item.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="col-md-2">
        <div className="input-wrapper">
          <label htmlFor="subCategory">Sub Category</label>
          <select name="subCategory" id="" className="form-control" onChange={subCategoryChange}>
            {state.subCategory &&
              state.subCategory.map((item, i) => {
                return (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                )
              })}
          </select>
        </div>
      </div>
      <div className="col-md-4">
        {state.badgeList &&
          state.badgeList.map((item, i) => {
            const formattedString = item.toLowerCase().replaceAll(" ", "_")
            const myArr = formattedString.split("-")
            const category = myArr[0]
            const subCategory = myArr[1]
            console.log("category", category, "subcategory", subCategory)
            return (
              <span key={i} className="badge badge-secondary">
                {item}
                <span onClick={deleteBadgeAndInput} someattribute="someattribute" category={category} subcategory={subCategory} data={item} className="icon-close">
                  &times;
                </span>
              </span>
            )
          })}
      </div>
      <div className="col-md-4">
        <form action="">
          {state.badgeList &&
            state.badgeList.map((item, i) => {
              const formattedString = item.toLowerCase().replaceAll(" ", "_")
              const myArr = formattedString.split("-")
              const category = myArr[0]
              const subCategory = myArr[1]
              return (
                <div className="input-wrapper" key={i}>
                  <label htmlFor={item}>{item}</label>
                  <div className="input-group">
                    <input type="text" name={formattedString} onChange={handleChange} className="form-control" id={item} placeholder={item} />
                    <div className="input-group-append" onClick={deleteBadgeAndInput} category={category} subcategory={subCategory} data={item}>
                      &times;
                    </div>
                  </div>
                </div>
              )
            })}
          <button className="btn-primary" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RejectPanel
