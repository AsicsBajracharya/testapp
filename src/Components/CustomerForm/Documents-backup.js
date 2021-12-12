import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router"
import DisplpayPicture from "./documents/DisplayPicture"
import ThumbPrintLeft from "./documents/ThumbprintLeft"
import ThumbprintRight from "./documents/ThumbprintRight"
import CitizenshipBack from "./documents/CitizenshipBack"
import CitizenshipFront from "./documents/CitizenshipFront"
import Signature from "./documents/Signature"
import FormDispatch from "./FormDispatch"

function Documents(props) {
  const [displayPicture, setDisplayPicture] = useState(null)
  const [thumbrpintLeft, setThumbprintLeft] = useState(null)
  const [thumbrpintRight, setThumbprintRight] = useState(null)
  const [citizenshipBack, setCitizenshipBack] = useState(null)
  const [citizenshipFront, setCitizenshipFront] = useState(null)
  const [signature, setSignature] = useState(null)
  const [errors, setErros] = useState("")
  const formDispatch = useContext(FormDispatch)
  function validateForm() {
    console.log("validate form")
    console.log("display picture from the documents", displayPicture)
    if (!displayPicture || !thumbrpintLeft || !thumbrpintRight || !citizenshipBack || !citizenshipFront || !signature) {
      setErros("please upload all the documents")
      return
    }
    formDispatch({
      type: "saveDocuments",
      value: {
        photo: displayPicture,
        gov_issued_id_front: citizenshipFront,
        gov_issued_id_back: citizenshipFront,
        thumb_left: thumbrpintLeft,
        thumb_right: thumbrpintRight,
        signature: signature,
        lat: "27.6915196",
        long: "85.3420486",
      },
    })
    console.log("documents saved from the documents component")
    props.history.push("/customers/register/agreement")
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
                <DisplpayPicture setDisplayPicture={setDisplayPicture} setErrors={setErros} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Thumbprint Left</p>
              </div>
              <div className="card-body">
                <ThumbPrintLeft setThumbprintLeft={setThumbprintLeft} setErrors={setErros} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Thumbprint Right</p>
              </div>
              <div className="card-body">
                <ThumbprintRight setThumbprintRight={setThumbprintRight} setErrors={setErros} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Citizenship card back</p>
              </div>
              <div className="card-body">
                <CitizenshipBack setCitizenshipBack={setCitizenshipBack} setErrors={setErros} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Citizenship card back</p>
              </div>
              <div className="card-body">
                <CitizenshipFront setCitizenshipFront={setCitizenshipFront} setErrors={setErros} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Signature</p>
              </div>
              <div className="card-body">
                <Signature setSignature={setSignature} setErrors={setErros} />
              </div>
            </div>
          </div>
        </div>
        {errors && <p className="text-danger">{errors}</p>}
      </div>
      <div className="card-footer">
        <span className="btn btn-primary" onClick={validateForm}>
          Next slide
        </span>
      </div>
    </div>
  )
}

export default withRouter(Documents)
