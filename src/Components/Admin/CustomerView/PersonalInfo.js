import React, { useEffect } from "react"

function PersonalInfo(props) {
  return (
    <table className="table">
      <tr>
        <td className="font-weight-bold">Full Name:</td>
        <td>{props.fullName}</td>
        <td className="font-weight-bold">Mobile:</td>
        <td>{props.mobile}</td>
      </tr>
      <tr>
        <td className="font-weight-bold">Email:</td>
        <td>{props.email}</td>
        <td className="font-weight-bold">Is Minor:</td>
        <td>{props.isMinor}</td>
      </tr>
      <tr>
        <td className="font-weight-bold">DOB:</td>
        <td>{props.personalInfo.dob}</td>
        <td className="font-weight-bold">Gender:</td>
        <td>{props.personalInfo.gender}</td>
      </tr>
      <tr>
        <td className="font-weight-bold">Marital Status:</td>
        <td>{props.personalInfo.marital_status}</td>
        <td className="font-weight-bold">Nationality:</td>
        <td>{props.personalInfo.nationality}</td>
      </tr>
      <tr>
        <td className="font-weight-bold">Account Type:</td>
        <td>{props.accountType}</td>
        <td className="font-weight-bold">Id Card Number:</td>
        <td>{props.personalInfo.identity_card_number}</td>
      </tr>
      <tr>
        <td className="font-weight-bold">Identity Card Type:</td>
        <td>{props.personalInfo.identity_card_type}</td>
        <td className="font-weight-bold">Identity Card Issue Date:</td>
        <td>{props.personalInfo.identity_card_issue_date}</td>
      </tr>
      <tr>
        <td className="font-weight-bold">Identity Card issue District:</td>
        <td>{props.personalInfo.identity_card_issue_district}</td>
        <td className="font-weight-bold">PAN No:</td>
        <td>{props.personalInfo.pan_number}</td>
      </tr>
    </table>
  )
}

export default PersonalInfo
