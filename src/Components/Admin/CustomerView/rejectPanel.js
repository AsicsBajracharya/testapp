import React, { useEffect } from "react"
import { useImmerReducer, userImmerReducer } from "use-immer"
const mainCategory = [
  {
    id: "1",
    name: "Personal Information",
    data: [
      {
        id: "1",
        name: "Full Name",
      },
      {
        id: "2",
        name: "Mobile",
      },
      {
        id: "3",
        name: "Email",
      },
      {
        id: "4",
        name: "DOB",
      },
      {
        id: "5",
        name: "Gender",
      },
      {
        id: "6",
        name: "Marital Status",
      },
      {
        id: "7",
        name: "Nationality",
      },
      {
        id: "8",
        name: "Account Type",
      },
      {
        id: "9",
        name: "Id Card Number",
      },
      {
        id: "10",
        name: "Id Card Type",
      },
      {
        id: "11",
        name: "Id Card Issue Date",
      },
      {
        id: "12",
        name: "Id Card Issue District",
      },
      {
        id: "13",
        name: "PAN No",
      },
    ],
  },
  {
    id: "2",
    name: "Guardian",
    data: [
      {
        id: "1",
        name: "Full Name",
      },
      {
        id: "2",
        name: "Mobile",
      },
      {
        id: "3",
        name: "Email",
      },
      {
        id: "4",
        name: "DOB",
      },
      {
        id: "5",
        name: "Gender",
      },
      {
        id: "6",
        name: "Marital Status",
      },
      {
        id: "7",
        name: "Nationality",
      },
      {
        id: "8",
        name: "Account Type",
      },
      {
        id: "9",
        name: "Id Card Number",
      },
      {
        id: "10",
        name: "Id Card Type",
      },
      {
        id: "11",
        name: "Id Card Issue Date",
      },
      {
        id: "12",
        name: "Id Card Issue District",
      },
      {
        id: "13",
        name: "PAN No",
      },
    ],
  },
  {
    id: "3",
    name: "Address",
  },
  {
    id: "4",
    name: "Family",
  },
  {
    id: "5",
    name: "Nominee",
  },
  {
    id: "6",
    name: "Occupation",
  },
  {
    id: "7",
    name: "Account",
  },
  {
    id: "8",
    name: "Documents",
  },
]
function RejectPanel() {
  const initialState = {
    categoryListLoadCount: 0,
    fieldListLoadCount: 0,
    categoryList: [],
    selectedCategory: "",
    fieldList: [],
    badgeList: [],
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "loadMainCategory":
        draft.categoryList.push(action.value)
        return
      case "mainCategoryLoaded":
        draft.categoryListLoadCount++
        return
      case "mainCategoryChange":
        draft.fieldList = []
        draft.selectedCategory = mainCategory.filter((item) => {
          return item.name == action.value
        })
        draft.selectedCategory = draft.selectedCategory[0]
        console.log(draft.selectedCategory)
        // load sub category
        if (draft.selectedCategory.data) {
          draft.fieldList.push(
            draft.selectedCategory.data.map((item, i) => {
              return item.name
            })
          )
        }
        return
      case "loadFieldList":
        draft.fieldList.push(action.value)
        return
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.selectedCategory.data) {
      state.selectedCategory.data.map((item, i) => {
        dispatch({ type: "loadFieldList", value: item.name })
      })
    }
  }, [state.fieldListLoadCount])
  useEffect(() => {
    if (state.categoryList && !state.categoryList.length) {
      console.log("fetch the category list here")
      mainCategory.map((item, i) => {
        dispatch({ type: "loadMainCategory", value: item.name })
      })
      dispatch({ typ: "mainCategoryLoaded" })
    }
  }, [state.categoryListLoadCount])

  useEffect(() => {
    console.log("categories loaded on state")
  }, [state.categoryListLoadCount])

  function mainCategoryChange(e) {
    console.log(e.target.value)
    dispatch({ type: "mainCategoryChange", value: e.target.value })
  }
  return (
    <div className="row">
      <div className="input-wrapper">
        <select name="" id="" className="main-category" onChange={mainCategoryChange}>
          {state.categoryList.map((item, i) => {
            return <option value={item}>{item}</option>
          })}
        </select>
      </div>
      <div className="input-wrapper">
        <select name="" id="" className="sub-category">
          {state.fieldList.map((item, i) => {
            return <option value={item}>{item}</option>
          })}
        </select>
      </div>
      <div className="input-wrapper"></div>
    </div>
  )
}

export default RejectPanel
