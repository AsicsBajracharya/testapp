import React, { useEffect, useState } from "react"
import Calendar from "@sbmdkl/nepali-datepicker-reactjs"
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { District } from "states-nepal"

function PersonalInfo() {
  const [bsDate, setBsDate] = useState("")
  const [adDate, setAdDate] = useState(new Date())

  const handleDate = ({ bsDate, adDate }) => {
    setBsDate({ date: bsDate })
    setAdDate({ date: adDate })
  }

  useEffect(() => {
    console.log("hello")
    const dobNepali = document.getElementById("dob")
    // const district = new District()

    // // const allDistricts = district.allDistricts()
    // console.log("all districts", district.allDistricts())
  }, [])
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
                      <input type="text" id="personal_information-date_of_birth_bs" className="form-control" required />
                      <Calendar onChange={handleDate} theme="deepdark" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-wrapper">
                    <label htmlFor="personal_information-date_of_birth_ad">Date of Birth (A.D.)*</label>
                    <div className="input-group">
                      <input value={adDate.date} type="text" id="personal_information-date_of_birth_ad" className="form-control" required />
                      {/* <DatePicker selected={adDate.date} onChange={(date) => setAdDate(date)} /> */}
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
                <div className="input-group">
                  <input type="text" id="personal_information-id_issued_district" className="form-control" />
                </div>
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
                  <input type="text" id="address-municipality" className="form-control" placeholder="Your Municipality VDC name" required/>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-locality_tole">Locality/Tole*</label>
                <div className="input-group">                   
                  <input type="text" id="address-locality_tole" className="form-control" placeholder="Enter your phones number" required/>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-ward_no">Ward No*</label>
                <div className="input-group">                   
                  <input type="text" id="address-ward_no" className="form-control" placeholder="Enter your ward number" required/>
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
                  <input type="checkbox" class="form-input" id="permanent-address"/>
                  <label for="permanent-address">Same as Current Address</label>

              </div>
            </div>
            
           

          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-country">Country </label>
                <div className="input-group">
                  <select name="" id="address-country" className="form-control" >
                    <option value="">Select a Country</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-province">Province</label>
                <div className="input-group">
                  <select name="" id="address-province" className="form-control" >
                    <option value="">Select a Province</option>

                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="address-district">District</label>
                <div className="input-group">
                  <select name="" id="address-district" className="form-control" >
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
                  <input type="text" id="family-father_name" className="form-control" placeholder="Enter your Father's Name" required/>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-grandfather_name">Grandfather's Name*</label>
                <div className="input-group">
                  <input type="text" id="family-grandfather_name" className="form-control" placeholder="Enter your Grandfather's Name" required/>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="family-mother_name">Mother's Name*</label>
                <div className="input-group">
                  <input type="text" id="family-mother_name" className="form-control" placeholder="Enter your Mother's Name" required/>
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

                  <input type="checkbox" class="form-input" id="family-add_nominee"/>
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
                  <input type="text" name="" id="account-bank_account_no"  className="form-control" placeholder="Enter Bank account no" required/>
                </div>

              </div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="input-group">
                  <input type="checkbox" class="form-input" id="account-renew_my_demat"/>
                  <label for="account-renew_my_demat">Renew my Demat Account automatically</label>

              </div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="input-group">
                  <input type="checkbox" class="form-input" id="account-open_mero_share"/>
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
                  <select name="" id="occupation-occupation" className="form-control" >
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
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="occupation-type_of_business">Type of Business</label>
                <div className="input-group">
                  <select name="" id="occupation-type_of_business" className="form-control" >
                    <option value="initial">Select a business</option>
                    <option value="Production">Production</option>
                    <option value="Service Oriented">Service Oriented</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="occupation-organization_name">Organization's Name</label>
                <div className="input-group">
                  <input type="text" id="occupation-organization_name" className="form-control" placeholder="Enter Your Organization's Name"  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="occupation-organization_address">Address</label>
                <div className="input-group">
                  <input type="text" id="occupation-organization_address" className="form-control" placeholder="Enter Your Organization's Address"  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="occupation-designation">Designation</label>
                <div className="input-group">
                  <input type="text" id="occupation-designation" className="form-control" placeholder="Enter Your designation in organization"  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <p>Select your Financial Details</p>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">               
                <div className="input-group">
                  <input type="radio" id="occupation-financial_details" className="form-control" />
                  <label htmlFor="occupation-financial_details">Upto Rs. 1,00,000</label>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">               
                <div className="input-group">
                  <input type="radio" id="occupation-financial_details" className="form-control" />
                  <label htmlFor="occupation-financial_details">From Rs. 1,00,001 to Rs. 2,00,000</label>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">               
                <div className="input-group">
                  <input type="radio" id="occupation-financial_details" className="form-control" />
                  <label htmlFor="occupation-financial_details">From Rs. 2,00,001 to Rs. 5,00,000</label>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">               
                <div className="input-group">
                  <input type="radio" id="occupation-financial_details" className="form-control" />
                  <label htmlFor="occupation-financial_details">Above Rs. 5,00,000</label>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">               
                <div className="input-group">
                  <input type="radio" id="occupation-financial_details" className="form-control" />
                  <label htmlFor="occupation-financial_details">Not Available</label>
                </div>
              </div>
            </div>
          </div>

        </div>     
      </div>
      {/* occupation */}
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <h3>Document details</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="document-pp_size_photo">Recent PP size photo</label>
                <div className="input-group">
                  <input type="file" id="document-pp_size_photo" className="form-control"   />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="document-thumbprint_left">Thumbprint left</label>
                <div className="input-group">
                  <input type="file" id="document-thumbprint_left" className="form-control"   />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="document-thumbprint_right">Thumbprint right</label>
                <div className="input-group">
                  <input type="file" id="document-thumbprint_right" className="form-control"   />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="document-governement_issued_card_front">Governement Issued Card - Front</label>
                <div className="input-group">
                  <input type="file" id="document-governement_issued_card_front" className="form-control"   />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="document-governement_issued_card_back">Government issued Card - Back</label>
                <div className="input-group">
                  <input type="file" id="document-governement_issued_card_back" className="form-control"   />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <label htmlFor="document-signature">Signature</label>
                <div className="input-group">
                  <input type="file" id="document-signature" className="form-control"   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Document */}
    </div>


  )
}

export default PersonalInfo
