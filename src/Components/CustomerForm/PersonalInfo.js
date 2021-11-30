import React, { useEffect, useState } from "react"
import Calendar from "@sbmdkl/nepali-datepicker-reactjs"
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { District } from "states-nepal"
import adbs from "ad-bs-converter"

const data = require("../../Assets/province-district.json")
function PersonalInfo() {
  const [bsDate, setBsDate] = useState("")
  const [adDate, setAdDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const handleDate = ({ bsDate, adDate }) => {
    console.log(data, "data")
    setBsDate({ date: bsDate })
    setAdDate({ date: adDate })
    console.log("startdate", startDate)
    console.log(new Date(adDate))
    setStartDate(new Date(adDate))
    console.log("startdate changed", startDate)
    console.log(new Date(adDate).toISOString())
  }

  function handleAdDate(date) {
    console.log(date)
    setStartDate(date)
    setBsDate(date)
    console.log(adbs.ad2bs(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`).ne, "ad2bs convereter")
    const convertedNepaliDate = adbs.ad2bs(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`).ne
    const formattedNepaliDate = `${convertedNepaliDate.year}-${convertedNepaliDate.month}-${convertedNepaliDate.day}`
    console.log("formatted nepali date", formattedNepaliDate)
    setBsDate({ date: formattedNepaliDate })
  }

  return (
    <div className="container">
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
                  {/* {data.map((item, i) => {
                    return <option> {item}</option>
                  })} */}
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
      </div>
      {/* Personal information */}
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
                  <select name="" id="address-country" className="form-control" required>
                    <option value="">Select a Country</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-province">Province*</label>
                <div className="input-group">
                  <select name="" id="address-province" className="form-control" required>
                    <option value="">Select a Province</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-district">District*</label>
                <div className="input-group">
                  <select name="" id="address-district" className="form-control" required>
                    <option value="">Select a District</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-city">City</label>
                <div className="input-group">
                  <input type="text" id="address-city" className="form-control" placeholder="Your City Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-municipality">Municipality*</label>
                <div className="input-group">
                  <input type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" required />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-locality_tole">Locality/Tole*</label>
                <div className="input-group">
                  <input type="text" id="address-locality_tole" className="form-control" placeholder="Enter your phones number" required />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-ward_no">Ward No*</label>
                <div className="input-group">
                  <input type="text" id="address-ward_no" className="form-control" placeholder="Enter your ward number" required />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-block_no">Block No</label>
                <div className="input-group">
                  <input type="text" id="address-block_no" className="form-control" placeholder="Enter your block number" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-telephone_number">Telephone Number</label>
                <div className="input-group">
                  <input type="text" id="address-telephone_number" className="form-control" placeholder="Enter your phones number" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <p>Permanent Address</p>
              <div class="input-group">
                <input type="checkbox" class="form-input" id="permanent-address" />
                <label for="permanent-address">Same as Current Address</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-country">Country </label>
                <div className="input-group">
                  <select name="" id="address-country" className="form-control">
                    <option value="">Select a Country</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-province">Province</label>
                <div className="input-group">
                  <select name="" id="address-province" className="form-control">
                    <option value="">Select a Province</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-district">District</label>
                <div className="input-group">
                  <select name="" id="address-district" className="form-control">
                    <option value="">Select a District</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-city">City</label>
                <div className="input-group">
                  <input type="text" id="address-city" className="form-control" placeholder="Your City Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-municipality">Municipality</label>
                <div className="input-group">
                  <input type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-locality_tole">Locality/Tole</label>
                <div className="input-group">
                  <input type="text" id="address-locality_tole" className="form-control" placeholder="Permanent locality" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-ward_no">Ward No</label>
                <div className="input-group">
                  <input type="text" id="address-ward_no" className="form-control" placeholder="Permanent ward no" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-block_no">Block No</label>
                <div className="input-group">
                  <input type="text" id="address-block_no" className="form-control" placeholder="Permanent block no" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-telephone_number">Telephone Number</label>
                <div className="input-group">
                  <input type="text" id="address-telephone_number" className="form-control" placeholder="Permanent Telephone number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Address */}
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
                  <input type="text" id="family-father_name" className="form-control" placeholder="Enter your Father's Name" required />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-grandfather_name">Grandfather's Name*</label>
                <div className="input-group">
                  <input type="text" id="family-grandfather_name" className="form-control" placeholder="Enter your Grandfather's Name" required />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-mother_name">Mother's Name*</label>
                <div className="input-group">
                  <input type="text" id="family-mother_name" className="form-control" placeholder="Enter your Mother's Name" required />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-spouse_name">Spouse Name</label>
                <div className="input-group">
                  <input type="text" id="family-spouse_name" className="form-control" placeholder="Enter your spouses Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-daughter_in_law_name">Daughter in Law's Name</label>
                <div className="input-group">
                  <input type="text" id="family-daughter_in_law_name" className="form-control" placeholder="Enter your daughter in law" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-father_in_law_name">Father's in Law's Name</label>
                <div className="input-group">
                  <input type="text" id="family-father_in_law_name" className="form-control" placeholder="Enter your father in law's Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-son_name">Son's Name</label>
                <div className="input-group">
                  <input type="text" id="family-son_name" className="form-control" placeholder="Enter your Son's Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-daughter_name">Daughter's Name</label>
                <div className="input-group">
                  <input type="text" id="family-daughter_name" className="form-control" placeholder="Enter your Daughter's Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="checkbox" class="form-input" id="family-add_nominee" />
                  <label for="family-add_nominee">Do you want to add nominee?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Family */}
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <h3>Account details</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="account-type_of_bank_account">Type of Bank Account*</label>
                <div className="input-group">
                  <select name="" id="account-type_of_bank_account" className="form-control" required>
                    <option value="">Select an account</option>
                    <option value="1">Saving</option>
                    <option value="2">Current</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="account-bank_name">Bank Name*</label>
                <div className="input-group">
                  <select name="" id="account-bank_name" className="form-control" required>
                    <option value="">Select a Bank</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="account-branch">Branch*</label>
                <div className="input-group">
                  <select name="" id="account-branch" className="form-control" required>
                    <option value="">Select your branch</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="account-bank_account_no">Bank Account No*</label>
                <div className="input-group">
                  <input type="text" name="" id="account-bank_account_no" className="form-control" placeholder="Enter Bank account no" required />
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="input-group">
                <input type="checkbox" class="form-input" id="account-renew_my_demat" />
                <label for="account-renew_my_demat">Renew my Demat Account automatically</label>
              </div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="input-group">
                <input type="checkbox" class="form-input" id="account-open_mero_share" />
                <label for="account-open_mero_share">Open Mero Share Account</label>
              </div>
            </div>

            <div class="col-md-12">
              <p>If you agree for this, the amount for renewal will be deducted from your Gurkhas Finance’s account</p>
            </div>
          </div>
        </div>
      </div>
      {/* account */}
    </div>
  )
}

export default PersonalInfo
