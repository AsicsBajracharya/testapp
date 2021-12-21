import React, { useEffect } from "react"

function Account(props) {
  return (
    <div>
      <table className="table">
        <tr>
          <td className="font-weight-bold">Type of Bank Account:</td>
          <td>{props.account.type}</td>
          <td className="font-weight-bold">Bank Name:</td>
          <td>{props.account.bank_name}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Branch:</td>
          <td>{props.account.branch_name}</td>
          <td className="font-weight-bold">Bank Account Number:</td>
          <td>{props.account.number}</td>
        </tr>
      </table>
    </div>
  )
}

export default Account
