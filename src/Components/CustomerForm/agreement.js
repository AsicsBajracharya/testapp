import React, { useEffect, useState } from "react"
import { useContext } from "react"
import FormDispatch from "./FormDispatch"
function Agreement() {
  const formDispatch = useContext(FormDispatch)
  const [formAccepted, setFormAccepted] = useState(false)

  function handleCheckbox(e) {
    console.log(e.target.checked)
    if (e.target.checked) {
      setFormAccepted(true)
      return
    }
    setFormAccepted(false)
  }
  function handleSubmit(e) {
    e.preventDefault()
    formDispatch({ type: "saveForm" })
  }
  return (
    <>
      <h1>This is the agreement scren</h1>
      <label htmlFor="form_agreement"></label>
      <input onChange={handleCheckbox} type="checkbox" name="" id="form_agreement" className="form-control" />
      <button onClick={handleSubmit} disabled={!formAccepted} className={`btn ${formAccepted ? "btn-success" : "btn-danger"}`}>
        Submit
      </button>
    </>
  )
}

export default Agreement
