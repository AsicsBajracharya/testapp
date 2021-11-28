import React, { useEffect } from "react"
import { Link } from "react-router-dom"
function Welcome() {
  return (
    <>
      <h2>This is the login screen</h2>
      <Link to="/customers/register">Create Demat Account</Link>
    </>
  )
}

export default Welcome
