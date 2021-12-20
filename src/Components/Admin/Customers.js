import React, { useEffect, useContext, useReducer } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Token } from "@mui/icons-material"
import StateContext from "../../StateContext"
import { useImmerReducer } from "use-immer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
function Customers() {
  const initialState = {
    userData: [],
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "loadUsers":
        draft.userData = action.value
        return
      case "default":
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  const appState = useContext(StateContext)
  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchCustomers() {
      try {
        const response = await axios.get("http://localhost:8000/api/customers", { headers: { Authorization: `Bearer ${appState.user.data.token}` } }, { cancelToken: ourRequest.token })
        console.log(response.data)
        dispatch({ type: "loadUsers", value: response.data.data })
      } catch (e) {
        console.log(e, "there was an error fetching customers")
      }
    }
    fetchCustomers()
    return () => ourRequest.cancel()
  }, [])

  if (!state.userData.length) {
    return <div>Loading ...</div>
  }
  return (
    <div>
      <div className="secondary-navigation">
        <ul>
          <li>all records</li>
        </ul>
      </div>
      <div className="table-data">
        <table class="table">
          <tr>
            <th>S.No</th>
            <th>REGISTRATION NO</th>
            <th>FULL NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>IS MINOR</th>
            <th>NOMINEE</th>
            <th>PAYMENT</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
          <tr>
            <td>S.No</td>
            <td>REGISTRATION NO</td>
            <td>FULL NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>IS MINOR</td>
            <td>NOMINEE</td>
            <td>PAYMENT</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
          {state.userData.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.registration_number}</td>
                <td>{item.full_name}}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.is_minor}</td>
                <td>{item.nominee}</td>
                <td>{item.payment_status}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/admin/dashboard/customers/${item.id}`}>
                    <FontAwesomeIcon icon={faEye} />
                    viewForm
                  </Link>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Customers
