import React, { useEffect, useState } from "react"
import { userImmerReducer } from "use-immer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
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
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [fieldList, setFieldList] = useState(null)
  const [badgeList, setBadgeList] = useState([])
  const [formData, setFormData] = useState([])

  function categoryChange(e) {
    console.log(e.target.value)
    mainCategory.map((item, i) => {
      if (e.target.value == item.id) {
        console.log("item.name", item.name)
        setSelectedCategory(item.id)
        setFieldList(item.data)
      }
    })
  }

  function fieldDropdownChange(e) {
    const selected = mainCategory.filter((item) => {
      return item.id == selectedCategory
    })
    const selectedCategoryName = selected[0].name
    // console.log("selected Category Name", selectedCategoryName)
    selected[0].data &&
      selected[0].data.map((item, i) => {
        if (item.id == e.target.value) {
          setBadgeList([...badgeList, `${selectedCategoryName}-${item.name}`])
        }
      })
  }
  function removeBadgeAndInput(item) {
    // console.log(item, "times icon clicked")
    console.log("times icon clicked", item)

    const filtered = badgeList.filter((itemName) => {
      return itemName != item
    })
    console.log(badgeList, "badgelist array")
    setBadgeList([filtered])
  }
  function handleInputChange(e) {
    console.log(e.target)
  }
  return (
    <div className="d-flex">
      <div className="input-wrapper">
        <label htmlFor="main-category">Selec main Category</label>
        <div className="input-group">
          <select className="form-control" onChange={categoryChange} name="main-category" id="">
            {mainCategory.map((item, i) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="main-category">Select Field</label>
        <div className="input-group">
          <select onChange={fieldDropdownChange} className="form-control" name="main-category" id="">
            {fieldList &&
              fieldList.map((item, i) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                )
              })}
          </select>
        </div>
      </div>
      <div className="input-wrapper">
        {badgeList &&
          badgeList.map((item, i) => {
            return (
              <span key={i} className="badge">
                {item}
                <FontAwesomeIcon icon={faTimes} onClick={() => removeBadgeAndInput(item)} />
              </span>
            )
          })}
      </div>
      <div className="input-wrapper">
        {badgeList &&
          badgeList.map((item, i) => {
            // console.log(item)
            return (
              <span key={i} className="badge">
                <input type="text" placeholder={item} id={item} className="form-control" onChange={handleInputChange} />
                <FontAwesomeIcon icon={faTimes} onClick={() => removeBadgeAndInput(item)} />
              </span>
            )
          })}
      </div>
    </div>
  )
}

export default RejectPanel
