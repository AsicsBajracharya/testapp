import React, { useEffect } from "react"

function Documents() {
  return (
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
                <input type="file" id="document-pp_size_photo" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="document-thumbprint_left">Thumbprint left</label>
              <div className="input-group">
                <input type="file" id="document-thumbprint_left" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="document-thumbprint_right">Thumbprint right</label>
              <div className="input-group">
                <input type="file" id="document-thumbprint_right" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="document-governement_issued_card_front">Governement Issued Card - Front</label>
              <div className="input-group">
                <input type="file" id="document-governement_issued_card_front" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="document-governement_issued_card_back">Government issued Card - Back</label>
              <div className="input-group">
                <input type="file" id="document-governement_issued_card_back" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="document-signature">Signature</label>
              <div className="input-group">
                <input type="file" id="document-signature" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents
