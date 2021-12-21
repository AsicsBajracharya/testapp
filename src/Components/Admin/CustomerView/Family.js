import React, { useEffect } from "react"

function Family(props) {
  return (
    <div>
      <table className="table">
        <tr>
          <td className="font-weight-bold">Father's Name:</td>
          <td>{props.family.father_name}</td>
          <td className="font-weight-bold">Grandfather's Name:</td>
          <td>{props.family.grand_father_name}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Mother's Name:</td>
          <td>{props.family.mother_name}</td>
          <td className="font-weight-bold">spouse's Name:</td>
          <td>{props.family.spouse_name}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Son's Name:</td>
          <td>{props.family.son_name}</td>
          <td className="font-weight-bold">Daughter's Name:</td>
          <td>{props.family.daughter_name}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Father in Law's Name:</td>
          <td>{props.family.father_in_law_name}</td>
          <td className="font-weight-bold">Daughter's Name:</td>
          <td>{props.family.daughter_in_law_name}</td>
        </tr>
      </table>
    </div>
  )
}

export default Family
