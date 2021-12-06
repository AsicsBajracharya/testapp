import React, { useContext, useEffect, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import districts from "../../Assets/district-list-nepal"
import provinceData from "../../Assets/province-district.json"
import { useImmerReducer } from "use-immer"
import FormDispatch from "./FormDispatch"

function Address(props) {
  const formDispatch = useContext(FormDispatch)
  const [savecount, setSaveCount] = useState(0)
  const intitalState = {
    temporary: {
      // type: "1",
      block_number: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      phone_number: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      ward_number: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      locality: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      municipality: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      city: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      district: {
        touched: false,
        value: "",
        hasErrors: false,
        message: "",
        list: [],
        listToShow: [],
      },
      province: {
        value: "",
        hasErrors: false,
        message: "",
        list: [],
        touched: false,
      },
      country: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
    },
    permanent: {
      // type: "2",
      block_number: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      phone_number: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      ward_number: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      locality: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      municipality: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      city: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
      district: {
        value: "",
        hasErrors: false,
        message: "",
        list: [],
        listToShow: [],
        touched: false,
      },
      province: {
        value: "",
        hasErrors: false,
        message: "",
        list: [],
        touched: false,
      },
      country: {
        value: "",
        hasErrors: false,
        message: "",
        touched: false,
      },
    },
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "temporaryCountryChange":
        draft.temporary.country.hasErrors = false
        draft.temporary.country.value = action.value
        draft.temporary.country.touched = true
        return
      case "renderProvinces":
        console.log("render province reducer hits")
        if (!draft.temporary.province.list.length) {
          for (const key in provinceData) {
            draft.temporary.province.list.push(key)
            draft.permanent.province.list.push(key)
          }
        }

        return
      case "temporaryProvincechange":
        draft.temporary.province.hasErrors = false
        draft.temporary.province.value = action.value
        draft.temporary.province.touched = true
        //empty distrct listToShow
        draft.temporary.district.listToShow = []
        //empty distrct value
        draft.temporary.district.value = ""
        //filter the array
        let selectedProvince
        for (const key in provinceData) {
          selectedProvince = provinceData[action.value]
        }
        //repopulate the listToShow array in the district
        selectedProvince.map((item, i) => {
          draft.temporary.district.listToShow.push(item.district)
        })
        return
      case "renderDistricts":
        for (const key in provinceData) {
          draft.temporary.district.list.push()
          provinceData[key].map((item, i) => {
            // console.log("from the array", item.district)
            draft.temporary.district.list.push(item.district)
            draft.permanent.district.list.push(item.district)
          })
        }
        draft.temporary.district.listToShow = draft.temporary.district.list
        draft.permanent.district.listToShow = draft.permanent.district.list
        return
      case "temporaryDistrictChange":
        draft.temporary.district.hasErrors = false
        draft.temporary.district.value = action.value
        draft.temporary.district.touched = true
        return
      case "temporaryMunicipalityChange":
        draft.temporary.municipality.hasErrors = false
        draft.temporary.municipality.value = action.value
        draft.temporary.municipality.touched = true
        return
      case "temporaryCityChange":
        draft.temporary.city.hasErrors = false
        draft.temporary.city.value = action.value
        draft.temporary.city.touched = true
        return
      case "temporaryLocalityChange":
        draft.temporary.locality.hasErrors = false
        draft.temporary.locality.value = action.value
        draft.temporary.locality.touched = true
        return
      case "temporaryWardChange":
        draft.temporary.ward_number.hasErrors = false
        draft.temporary.ward_number.value = action.value
        draft.temporary.ward_number.touched = true
        return
      case "temporaryBlockChange":
        draft.temporary.block_number.hasErrors = false
        draft.temporary.block_number.value = action.value
        draft.temporary.block_number.touched = true
        return
      case "temporaryPhoneChange":
        draft.temporary.phone_number.hasErrors = false
        draft.temporary.phone_number.value = action.value
        draft.temporary.phone_number.touched = true
        return
      //PERMANENT
      case "permanentCountryChange":
        draft.permanent.country.hasErrors = false
        draft.permanent.country.value = action.value
        draft.permanent.country.touched = true
        return
      case "renderProvinces":
        console.log("render province reducer hits")
        if (!draft.permanent.province.list.length) {
          for (const key in provinceData) {
            draft.permanent.province.list.push(key)
          }
        }

        return
      case "permanentProvincechange":
        draft.permanent.province.hasErrors = false
        draft.permanent.province.value = action.value
        draft.permanent.province.touched = true
        //empty distrct listToShow

        draft.permanent.district.listToShow = []
        //empty distrct value
        draft.permanent.district.value = ""
        //filter the array
        let selectedProvince2
        for (const key in provinceData) {
          selectedProvince2 = provinceData[action.value]
        }
        //repopulate the listToShow array in the district
        selectedProvince2.map((item, i) => {
          draft.permanent.district.listToShow.push(item.district)
        })
        return
      case "permanentDistrictChange":
        draft.permanent.district.hasErrors = false
        draft.permanent.district.value = action.value
        draft.permanent.district.touched = true

        return
      case "permanentMunicipalityChange":
        draft.permanent.municipality.hasErrors = false
        draft.permanent.municipality.value = action.value
        draft.permanent.municipality.touched = true
        return
      case "permanentCityChange":
        draft.permanent.city.hasErrors = false
        draft.permanent.city.value = action.value
        draft.permanent.city.touched = true
        return
      case "permanentLocalityChange":
        draft.permanent.locality.hasErrors = false
        draft.permanent.locality.value = action.value
        draft.permanent.locality.touched = true
        return
      case "permanentWardChange":
        draft.permanent.ward_number.hasErrors = false
        draft.permanent.ward_number.value = action.value
        draft.permanent.ward_number.touched = true
        return
      case "permanentBlockChange":
        draft.permanent.block_number.hasErrors = false
        draft.permanent.block_number.value = action.value
        draft.permanent.block_number.touched = true
        return
      case "permanentPhoneChange":
        draft.permanent.phone_number.hasErrors = false
        draft.permanent.phone_number.value = action.value
        draft.permanent.phone_number.touched = true
        return
      case "sameAsCurrent":
        draft.permanent.country.value = draft.temporary.country.value
        draft.permanent.country.touched = true
        draft.permanent.province.value = draft.temporary.province.value
        draft.permanent.province.touched = true
        draft.permanent.district.value = draft.temporary.district.value
        draft.permanent.district.touched = true
        draft.permanent.municipality.value = draft.temporary.municipality.value
        draft.permanent.municipality.touched = true
        draft.permanent.city.value = draft.temporary.city.value
        draft.permanent.city.touched = true
        draft.permanent.locality.value = draft.temporary.locality.value
        draft.permanent.locality.touched = true
        draft.permanent.ward_number.value = draft.temporary.ward_number.value
        draft.permanent.ward_number.touched = true
        draft.permanent.block_number.value = draft.temporary.block_number.value
        draft.permanent.block_number.touched = true
        draft.permanent.phone_number.value = draft.temporary.phone_number.value
        draft.permanent.phone_number.touched = true
        draft.permanent.country.hasErrors = false
        draft.permanent.province.hasErrors = false
        draft.permanent.district.hasErrors = false
        draft.permanent.municipality.hasErrors = false
        draft.permanent.city.hasErrors = false
        draft.permanent.locality.hasErrors = false
        draft.permanent.ward_number.hasErrors = false
        draft.permanent.block_number.hasErrors = false
        draft.permanent.phone_number.hasErrors = false
        return
      case "differentFromCurrent":
        draft.permanent.country.value = ""
        draft.permanent.province.value = ""
        draft.permanent.district.value = ""
        draft.permanent.municipality.value = ""
        draft.permanent.city.value = ""
        draft.permanent.locality.value = ""
        draft.permanent.ward_number.value = ""
        draft.permanent.block_number.value = ""
        draft.permanent.phone_number.value = ""
        draft.permanent.country.touched = false
        draft.permanent.province.touched = false
        draft.permanent.district.touched = false
        draft.permanent.municipality.touched = false
        draft.permanent.city.touched = false
        draft.permanent.locality.touched = false
        draft.permanent.ward_number.touched = false
        draft.permanent.block_number.touched = false
        draft.permanent.phone_number.touched = false
        return
      case "validationRules":
        let errorCount = 0
        for (const key in draft) {
          for (const key2 in draft[key]) {
            if (!draft[key][key2].touched || draft[key][key2].value == "") {
              // console.log(draft[key][key2])
              draft[key][key2].hasErrors = true
              draft[key][key2].message = "you must fill in this field to navigate to the other step"
            }
          }
        }
        for (const key in draft) {
          for (const key2 in draft[key]) {
            if (draft[key][key2].hasErrors) {
              errorCount++
            }
          }
        }
        console.log("errorCount", errorCount)
        console.log(!errorCount)
        {
          !errorCount && setSaveCount(savecount + 1)
        }
        // console.log(saveCount)
        console.log(savecount)
        return
      case "default":
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, intitalState)

  // function fetchProvinceList() {
  //   "<option> some rendered province name </option>"
  // }

  useEffect(() => {
    dispatch({ type: "renderProvinces" })
    dispatch({ type: "renderDistricts" })
  }, [])
  useEffect(() => {
    console.log("save count form the useeffect", savecount)
    console.log("save the the state and navigate to another page")
    if (savecount) {
      console.log("there is a savecount")
      formDispatch({
        type: "saveAddress",
        value: [
          {
            type: "1",
            block_number: state.temporary.block_number.value,
            phone_number: state.temporary.phone_number.value,
            ward_number: state.temporary.ward_number.value,
            locality: state.temporary.locality.value,
            municipality: state.temporary.municipality.value,
            district: state.temporary.district.value,
            province: state.temporary.province.value,
            country: state.temporary.country.value,
          },
          {
            type: "2",
            block_number: state.permanent.block_number.value,
            phone_number: state.permanent.phone_number.value,
            ward_number: state.permanent.ward_number.value,
            locality: state.permanent.locality.value,
            municipality: state.permanent.municipality.value,
            district: state.permanent.district.value,
            province: state.permanent.province.value,
            country: state.permanent.country.value,
          },
        ],
      })
      props.history.push("/customers/register/familyInformation")
    }

    // console.log(Object.values(state))
  }, [savecount])

  function handleCheck(e) {
    console.log("value of the checkbox", e.target.checked)
    if (e.target.checked) {
      dispatch({ type: "sameAsCurrent" })
    } else {
      dispatch({ type: "differentFromCurrent" })
    }
  }

  function handleSubmit() {
    dispatch({ type: "validationRules" })
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Address details</h3>
      </div>
      <h4>Current Address</h4>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-country">Country*</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "temporaryCountryChange", value: e.target.value })} value={state.temporary.country.value} name="" id="address-country" className="form-control" placeholder="Select a country" required>
                  <option value="Nepal">Nepal</option>
                  <option value="inida">India</option>
                </select>
              </div>
              {state.temporary.country.hasErrors && <div class="text-danger">{state.temporary.country.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-province">Province*</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "temporaryProvincechange", value: e.target.value })} value={state.temporary.province.value} name="" id="address-province" className="form-control" required>
                  {state.temporary.province.list.map((item, i) => {
                    return <option value={item}>{item}</option>
                  })}
                </select>
              </div>
              {state.temporary.province.hasErrors && <div class="text-danger">{state.temporary.province.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-district">District*</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "temporaryDistrictChange", value: e.target.value })} value={state.temporary.district.value} name="" id="address-district" className="form-control" placeholder="Select a District" value={state.temporary.district.value} required>
                  {state.temporary.district.listToShow.map((item, i) => {
                    return <option value={item}>{item}</option>
                  })}
                </select>
              </div>
              {state.temporary.district.hasErrors && <div class="text-danger">{state.temporary.district.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-city">City</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "temporaryCityChange", value: e.target.value })} value={state.temporary.city.value} type="text" id="address-city" className="form-control" placeholder="Your City Name" />
              </div>
            </div>
            {state.temporary.city.hasErrors && <div class="text-danger">{state.temporary.city.message}</div>}
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-municipality">Municipality*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "temporaryMunicipalityChange", value: e.target.value })} value={state.temporary.municipality.value} type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" required />
              </div>
            </div>
            {state.temporary.municipality.hasErrors && <div class="text-danger">{state.temporary.municipality.message}</div>}
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-locality_tole">Locality/Tole*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "temporaryLocalityChange", value: e.target.value })} value={state.temporary.locality.value} type="text" id="address-locality_tole" className="form-control" placeholder="Enter your phones number" required />
              </div>
            </div>
            {state.temporary.locality.hasErrors && <div class="text-danger">{state.temporary.locality.message}</div>}
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-ward_no">Ward No*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "temporaryWardChange", value: e.target.value })} value={state.temporary.ward_number.value} type="text" id="address-ward_no" className="form-control" placeholder="Enter your ward number" required />
              </div>
            </div>
            {state.temporary.ward_number.hasErrors && <div class="text-danger">{state.temporary.ward_number.message}</div>}
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-block_no">Block No</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "temporaryBlockChange", value: e.target.value })} value={state.temporary.block_number.value} type="text" id="address-block_no" className="form-control" placeholder="Enter your block number" />
              </div>
            </div>
            {state.temporary.block_number.hasErrors && <div class="text-danger">{state.temporary.block_number.message}</div>}
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-telephone_number">Telephone Number</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "temporaryPhoneChange", value: e.target.value })} value={state.temporary.phone_number.value} type="text" id="address-telephone_number" className="form-control" placeholder="Enter your phones number" />
              </div>
            </div>
            {state.temporary.phone_number.hasErrors && <div class="text-danger">{state.temporary.phone_number.message}</div>}
          </div>
          <div class="col-md-4">
            <p>Permanent Address</p>
            <div class="input-group">
              <input type="checkbox" class="form-input" id="permanent-address" onClick={handleCheck} />
              <label for="permanent-address">Same as Current Address</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-country">Country </label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "permanentCountryChange", value: e.target.value })} value={state.permanent.country.value} name="" id="address-country" className="form-control">
                  <option value="Nepal">Nepal</option>
                  <option value="inida">India</option>
                </select>
              </div>
              {state.permanent.country.hasErrors && <div class="text-danger">{state.permanent.country.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-province">Province</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "permanentProvincechange", value: e.target.value })} value={state.permanent.province.value} name="" id="address-province" className="form-control">
                  {state.permanent.province.list.map((item, i) => {
                    return <option value={item}>{item}</option>
                  })}
                </select>
              </div>
              {state.permanent.province.hasErrors && <div class="text-danger">{state.permanent.province.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-district">District</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "permanentDistrictChange", value: e.target.value })} value={state.permanent.district.value} name="" id="address-district" className="form-control">
                  {state.permanent.district.listToShow.map((item, i) => {
                    return <option value={item}>{item}</option>
                  })}
                </select>
              </div>
              {state.permanent.district.hasErrors && <div class="text-danger">{state.permanent.district.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-city">City</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "permanentCityChange", value: e.target.value })} value={state.permanent.city.value} type="text" id="address-city" className="form-control" placeholder="Your City Name" />
              </div>
              {state.permanent.city.hasErrors && <div class="text-danger">{state.permanent.city.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-municipality">Municipality</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "permanentMunicipalityChange", value: e.target.value })} value={state.permanent.municipality.value} type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" />
              </div>
              {state.permanent.municipality.hasErrors && <div class="text-danger">{state.permanent.municipality.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-locality_tole">Locality/Tole</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "permanentLocalityChange", value: e.target.value })} value={state.permanent.locality.value} type="text" id="address-locality_tole" className="form-control" placeholder="Permanent locality" />
              </div>
              {state.permanent.locality.hasErrors && <div class="text-danger">{state.permanent.locality.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-ward_no">Ward No</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "permanentWardChange", value: e.target.value })} value={state.permanent.ward_number.value} type="text" id="address-ward_no" className="form-control" placeholder="Permanent ward no" />
              </div>
              {state.permanent.ward_number.hasErrors && <div class="text-danger">{state.permanent.ward_number.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-block_no">Block No</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "permanentBlockChange", value: e.target.value })} value={state.permanent.block_number.value} type="text" id="address-block_no" className="form-control" placeholder="Permanent block no" />
              </div>
              {state.permanent.block_number.hasErrors && <div class="text-danger">{state.permanent.block_number.message}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="address-telephone_number">Telephone Number</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "permanentPhoneChange", value: e.target.value })} value={state.permanent.phone_number.value} type="text" id="address-telephone_number" className="form-control" placeholder="Permanent Telephone number" />
              </div>
              {state.permanent.phone_number.hasErrors && <div class="text-danger">{state.permanent.phone_number.message}</div>}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="button-container">
            <span className="btn btn-primary" onClick={handleSubmit}>
              next
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Address)
