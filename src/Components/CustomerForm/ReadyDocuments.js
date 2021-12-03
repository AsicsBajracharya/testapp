import React, { useEffect } from "react"
import { Link } from "react-router-dom"
function ReadyDocuments() {
  return (
    <>
      <h1>
        {" "}
        I have my documents scanned and ready , <Link to="/customers/register/personalInfo">Let's start</Link>{" "}
      </h1>
    </>
  )
}

export default ReadyDocuments
