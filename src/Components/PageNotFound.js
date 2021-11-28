import React, { useEffect } from "react"
import { Link } from "react-router-dom"
function PageNotFound() {
  return (
    <>
      <h1>
        Oops! There is no such page, Please visit the <Link to="/">Homepage</Link> for a fresh start
      </h1>
    </>
  )
}

export default PageNotFound
