import React, { useEffect } from "react"
import districts from "../../Assets/district-list-nepal"
function filterDistrict(e) {
  console.log("province changed", e.target.value)
}

const uniqueProvinces = districts.map((item) => item.province_id).filter((value, index, self) => self.indexOf(value) === index)

function Address() {
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
                  {uniqueProvinces.map((item, i) => {
                    return <option value={item}>{item}</option>
                  })}
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
  )
}

export default Address
