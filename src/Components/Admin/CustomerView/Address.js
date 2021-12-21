import React, { useEffect } from "react"

function Address(props) {
  return (
    <div>
      <h3> Temporary Address</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">country:</td>
          <td>{props.temporary.country}</td>
          <td className="font-weight-bold">Province:</td>
          <td>{props.temporary.province}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">District:</td>
          <td>{props.temporary.district}</td>
          <td className="font-weight-bold">Municipality:</td>
          <td>{props.temporary.municipality}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Locality:</td>
          <td>{props.temporary.locality}</td>
          <td className="font-weight-bold">Ward:</td>
          <td>{props.temporary.ward_number}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Block Number:</td>
          <td>{props.temporary.block_number}</td>
        </tr>
      </table>
      <h3>Permanent Address</h3>
      <table className="table">
        <tr>
          <td className="font-weight-bold">country:</td>
          <td>{props.permanent.country}</td>
          <td className="font-weight-bold">Province:</td>
          <td>{props.permanent.province}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">District:</td>
          <td>{props.permanent.district}</td>
          <td className="font-weight-bold">Municipality:</td>
          <td>{props.permanent.municipality}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Locality:</td>
          <td>{props.permanent.locality}</td>
          <td className="font-weight-bold">Ward:</td>
          <td>{props.permanent.ward_number}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Block Number:</td>
          <td>{props.permanent.block_number}</td>
        </tr>
      </table>
    </div>
  )
}

export default Address
