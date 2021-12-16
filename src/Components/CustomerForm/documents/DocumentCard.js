import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router"
import DisplpayPicture from "./DisplayPicture"
import ThumbPrintLeft from "./ThumbprintLeft"
import ThumbprintRight from "./ThumbprintRight"
import CitizenshipBack from "./CitizenshipBack"
import CitizenshipFront from "./CitizenshipFront"
import Signature from "./Signature"

function DocumentCard(props) {
  const [displayPicture, setDisplayPicture] = useState(null)
  const [thumbrpintLeft, setThumbprintLeft] = useState(null)
  const [thumbrpintRight, setThumbprintRight] = useState(null)
  const [citizenshipBack, setCitizenshipBack] = useState(null)
  const [citizenshipFront, setCitizenshipFront] = useState(null)
  const [signature, setSignature] = useState(null)

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
                <DisplpayPicture setDisplayPicture={props.setDisplayPicture} />
                {props.setError.displayPicture.hasErrors && <p className="text-danger">{props.setError.displayPicture.message}</p>}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Thumbprint Left</p>
              </div>
              <div className="card-body">
                <ThumbPrintLeft setThumbprintLeft={props.setThumbprintLeft} />
                {props.setError.thumbrpintLeft.hasErrors && <p className="text-danger">{props.setError.thumbrpintLeft.message}</p>}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Thumbprint Right</p>
              </div>
              <div className="card-body">
                <ThumbprintRight setThumbprintRight={props.setThumbprintRight} />
                {props.setError.thumbrpintRight.hasErrors && <p className="text-danger">{props.setError.thumbrpintRight.message}</p>}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Citizenship card back</p>
              </div>
              <div className="card-body">
                <CitizenshipBack setCitizenshipBack={props.setCitizenshipBack} />
                {props.setError.citizenshipBack.hasErrors && <p className="text-danger">{props.setError.citizenshipBack.message}</p>}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Citizenship card back</p>
              </div>
              <div className="card-body">
                <CitizenshipFront setCitizenshipFront={props.setCitizenshipFront} />
                {props.setError.citizenshipFront.hasErrors && <p className="text-danger">{props.setError.citizenshipFront.message}</p>}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <p className="lead">Your Signature</p>
              </div>
              <div className="card-body">
                <Signature setSignature={props.setSignature} />
                {props.setError.signature.hasErrors && <p className="text-danger">{props.setError.signature.message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(DocumentCard)
