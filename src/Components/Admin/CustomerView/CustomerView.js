import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import axios from "axios"
function CustomerView() {
  const { id } = useParams()
  const initialState = {
    customerData: {},
  }
  console.log(id, "params id")
  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchCustomer() {
      try {
        // const response = await axios.get()
      } catch (e) {}
    }
    fetchCustomer()
    return () => ourRequest.cancel()
  }, [])
  return (
    <div>
      <div className="secondary-navigation">
        <ul>
          <li>Personal Info</li>
          <li>Guardian</li>
          <li>Address</li>
          <li>Family</li>
          <li>Nominee</li>
          <li>Occupation</li>
          <li>Account</li>
          <li>Documents</li>
        </ul>
      </div>
    </div>
  )
}

export default CustomerView
