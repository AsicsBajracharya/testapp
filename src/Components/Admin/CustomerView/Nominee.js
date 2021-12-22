import React, { useEffect } from "react"

function Guardian(props) {
  console.log(props, "props form the guardian component")
  return (
    <div>
      <h3>Guardian's Personal Information</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">Name of Guardian:</td>
          <td>{props.nominee.full_name}</td>
          <td className="font-weight-bold">Relationship With Applicant:</td>
          <td>{props.nominee.relation}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Father's Name:</td>
          <td>{props.nominee.father_name}</td>
          <td className="font-weight-bold">Grandfather's Name:</td>
          <td>{props.nominee.grand_father_name}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Guardian's Mobile:</td>
          <td>{props.nominee.mobile}</td>
          <td className="font-weight-bold">Guardian's Email:</td>
          <td>{props.nominee.email}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Nationality:</td>
          <td>{props.nominee.personal_informations ? props.nominee.personal_informations[0].nationality : ""}</td>
          <td className="font-weight-bold">Type of ID Card:</td>
          <td>{props.nominee.personal_informations ? props.nominee.personal_informations[0].identity_card_type : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Identification Number:</td>
          <td>{props.nominee.personal_informations ? props.nominee.personal_informations[0].identity_card_number : ""}</td>
          <td className="font-weight-bold">Identity Card Issue District:</td>
          <td>{props.nominee.personal_informations ? props.nominee.personal_informations[0].identity_card_issue_district : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Identity Card Issue Date:</td>
          <td>{props.nominee.personal_informations ? props.nominee.personal_informations[0].identity_card_issue_date : ""}</td>
          <td className="font-weight-bold">Guardian's PAN Number:</td>
          <td>{props.nominee.personal_informations ? props.nominee.personal_informations[0].pan_number : ""}</td>
        </tr>
      </table>
      <h3>Guardian's Temporary Address</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">country:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].country : ""}</td>
          <td className="font-weight-bold">Province:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].province : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">District:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].district : ""}</td>
          <td className="font-weight-bold">Municipality:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].municipality : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Locality:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].locality : ""}</td>
          <td className="font-weight-bold">Ward:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].ward_number : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Block Number:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[0].block_number : ""}</td>
        </tr>
      </table>
      <h3>Guardian's Permanent Address</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">country:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].country : ""}</td>
          <td className="font-weight-bold">Province:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].province : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">District:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].district : ""}</td>
          <td className="font-weight-bold">Municipality:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].municipality : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Locality:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].locality : ""}</td>
          <td className="font-weight-bold">Ward:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].ward_number : ""}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Block Number:</td>
          <td>{props.nominee.addresses ? props.nominee.addresses[1].block_number : ""}</td>
        </tr>
      </table>
    </div>
  )
}

export default Guardian
