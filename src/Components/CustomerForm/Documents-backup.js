import React, { useEffect, useState } from "react"
import DisplpayPicture from "./documents/DisplayPicture"
import ThumbPrintLeft from "./documents/ThumbprintLeft"
import ThumbprintRight from "./documents/ThumbprintRight"
import CitizenshipBack from "./documents/CitizenshipBack"
import CitizenshipFront from "./documents/CitizenshipFront"
import Signature from "./documents/Signature"

function Documents() {
  const [displayPicture, setDisplayPicture] = useState(null)
  const [thumbrpintLeft, setThumbprintLeft] = useState(null)
  const [thumbrpintRight, setThumbprintRight] = useState(null)
  const [citizenshipBack, setCitizenshipBack] = useState(null)
  const [citizenshipFront, setCitizenshipFront] = useState(null)
  const [signature, setsignature] = useState(null)
  function validateForm() {
    console.log("validate form")
  }
  return (
    <div className="card">
      <div className="card-header">Upload your documents</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Profile Picture</p>
              </div>
              <div className="card-body">
                <DisplpayPicture setDP={setDisplayPicture} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Thumbprint Left</p>
              </div>
              <div className="card-body">
                <ThumbPrintLeft />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Thumbprint Right</p>
              </div>
              <div className="card-body">
                <ThumbprintRight />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Citizenship card back</p>
              </div>
              <div className="card-body">
                <CitizenshipBack />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Citizenship card back</p>
              </div>
              <div className="card-body">
                <CitizenshipFront />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Signature</p>
              </div>
              <div className="card-body">
                <Signature />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <span className="btn btn-primary" onclick={validateForm}>
          Next
        </span>
      </div>
    </div>
  )
}

export default Documents
