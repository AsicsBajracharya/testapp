import React, { useEffect } from "react"

function PersonalInfo() {
  useEffect(() => {
    console.log("hello")
    const dobNepali = document.getElementById("dob")
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" placeholder="mobile" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" id="dob" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
