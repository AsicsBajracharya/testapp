import React, { useEffect } from "react"

function Occupation(props) {
  return (
    <div>
      <table className="table">
        <tr>
          <td className="font-weight-bold">Occupation:</td>
          <td>{props.occupation.title}</td>
          <td className="font-weight-bold">Type Of Business:</td>
          <td>{props.occupation.type}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Organization Name:</td>
          <td>{props.occupation.organization_name}</td>
          <td className="font-weight-bold">Organization Address:</td>
          <td>{props.occupation.address}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Designation:</td>
          <td>{props.occupation.designation}</td>
          <td className="font-weight-bold">Financial Detalis:</td>
          <td>{props.occupation.financial_details}</td>
        </tr>
      </table>
    </div>
  )
}

export default Occupation
