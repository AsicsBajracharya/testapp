import React, { useEffect } from "react"

function Guardian(props) {
  console.log(props, "props form the guardian component")
  return (
    <div>
      <h3>Guardian's Personal Information</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">Name of Guardian:</td>
          <td>{props.guardian.full_name}</td>
          <td className="font-weight-bold">Relationship With Applicant:</td>
          <td>{props.guardian.relation}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Father's Name:</td>
          <td>{props.guardian.father_name}</td>
          <td className="font-weight-bold">Grandfather's Name:</td>
          <td>{props.guardian.grand_father_name}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Guardian's Mobile:</td>
          <td>{props.guardian.mobile}</td>
          <td className="font-weight-bold">Guardian's Email:</td>
          <td>{props.guardian.email}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Nationality:</td>
          <td>{props.guardian.personal_informations ? props.guardian.personal_informations[0].nationality : ""}</td>
          <td className="font-weight-bold">Type of ID Card:</td>
          <td>{props.guardian.personal_informations ? props.guardian.personal_informations[0].identity_card_type : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Identification Number:</td>
          <td>{props.guardian.personal_informations ? props.guardian.personal_informations[0].identity_card_number : ""}</td>
          <td className="font-weight-bold">Identity Card Issue District:</td>
          <td>{props.guardian.personal_informations ? props.guardian.personal_informations[0].identity_card_issue_district : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Identity Card Issue Date:</td>
          <td>{props.guardian.personal_informations ? props.guardian.personal_informations[0].identity_card_issue_date : ""}</td>
          <td className="font-weight-bold">Guardian's PAN Number:</td>
          <td>{props.guardian.personal_informations ? props.guardian.personal_informations[0].pan_number : ""}</td>
        </tr>
      </table>
      <h3>Guardian's Temporary Address</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">country:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].country : ""}</td>
          <td className="font-weight-bold">Province:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].province : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">District:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].district : ""}</td>
          <td className="font-weight-bold">Municipality:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].municipality : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Locality:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].locality : ""}</td>
          <td className="font-weight-bold">Ward:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].ward_number : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Block Number:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[0].block_number : ""}</td>
        </tr>
      </table>
      <h3>Guardian's Permanent Address</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">country:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].country : ""}</td>
          <td className="font-weight-bold">Province:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].province : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">District:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].district : ""}</td>
          <td className="font-weight-bold">Municipality:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].municipality : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Locality:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].locality : ""}</td>
          <td className="font-weight-bold">Ward:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].ward_number : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Block Number:</td>
          <td>{props.guardian.addresses ? props.guardian.addresses[1].block_number : ""}</td>
        </tr>
      </table>
    </div>
  )
}

export default Guardian
