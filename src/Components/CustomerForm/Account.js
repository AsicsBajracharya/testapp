import React, { useEffect } from "react"
import { withRouter } from "react-router"
import { useImmerReducer } from "use-immer"
import BankData from "../../Assets/banks.json"
function Account(props) {
  const initialState = {
    formData: {
      typeOfBank: {
        name: "typeOfBank",
        value: "",
        hasErrors: false,
        message: "",
      },
      bankName: {
        name: "bankName",
        value: "",
        hasErrors: false,
        message: "",
        bankList: [],
        bankListToShow: [],
      },
      branch: {
        name: "branch",
        value: "",
        hasErrors: false,
        message: "",
        branchList: [],
      },
      accountNo: {
        name: "accountNo",
        value: "",
        hasErrors: false,
        message: "",
      },
    },
    errorCount: 0,
    saveCount: 0,
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "inputChange":
        for (const key in draft.formData) {
          if (draft.formData[key].name == action.field) {
            draft.formData[key].hasErrors = false
            draft.formData[key].value = action.value
          }
        }
        return
      case "bankValueChange":
        console.log("bank value change")
        draft.formData.bankName.hasErrors = false
        draft.formData.bankName.value = action.value

        draft.formData.branch.branchList = []
        draft.formData.branch.branchList.push()
        let branches = draft.formData.bankName.bankList.filter((item) => item.includes(action.value))
        branches.map((item, i) => {
          draft.formData.branch.branchList.push(item.substring(item.indexOf("-") + 1, item.length))
        })
        return
      case "renderBanks":
        BankData.map((item, i) => {
          // console.log(item.bankName)
          async function fetchBanks() {
            try {
              draft.formData.bankName.bankList.push(item.bankName)
            } catch (e) {
              console.log(e, "there was an error fetching banks")
            }
          }
          fetchBanks()
        })
        // console.log(draft.formData.bankName.bankList.length)
        draft.formData.bankName.bankList.map((item, i) => {
          // console.log(item.bankName)
          async function fetchBanks() {
            try {
              if (!draft.formData.bankName.bankListToShow.includes(item.substring(0, item.indexOf("-")))) {
                draft.formData.bankName.bankListToShow.push(item.substring(0, item.indexOf("-")))
              }
            } catch (e) {
              console.log(e, "there was an error fetching banks")
            }
          }
          fetchBanks()
        })
        return
      case "validateForm":
        console.log("validate form")
        draft.errorCount = 0
        for (const key in draft.formData) {
          if (!draft.formData[key].value) {
            console.log("no value in", draft.formData[key])
            draft.formData[key].hasErrors = true
            draft.formData[key].message = "this field cannot be blank"
          }
        }
        for (const key in draft.formData) {
          draft.formData[key].hasErrors && draft.errorCount++
        }
        if (!draft.errorCount) {
          draft.saveCount++
        }
        return
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    dispatch({ type: "renderBanks" })
  }, [])

  useEffect(() => {
    if (state.saveCount) {
      console.log("ready to save")
      props.history.push("/customers/register/documents")
    }
    // dispatch({ type: "renderBanks" })
  }, [state.saveCount])

  function handleSubmit() {
    dispatch({ type: "validateForm" })
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <h3>Account details</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="account-type_of_bank_account">Type of Bank Account*</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "typeOfBank" })} name="" id="account-type_of_bank_account" className="form-control" required>
                  <option value="">Select an account</option>
                  <option value="1">Saving</option>
                  <option value="2">Current</option>
                </select>
              </div>
              {state.formData.typeOfBank.hasErrors && <p className="text-danger">{state.formData.typeOfBank.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="account-bank_name">Bank Name*</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "bankValueChange", value: e.target.value, field: "bankName" })} name="" id="account-bank_name" className="form-control" required>
                  {state.formData.bankName.bankListToShow.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    )
                  })}
                </select>
              </div>
              {state.formData.bankName.hasErrors && <p className="text-danger">{state.formData.bankName.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="account-branch">Branch*</label>
              <div className="input-group">
                <select onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "branch" })} name="" id="account-branch" className="form-control" required>
                  {state.formData.branch.branchList.length &&
                    state.formData.branch.branchList.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      )
                    })}
                </select>
              </div>
              {state.formData.branch.hasErrors && <p className="text-danger">{state.formData.branch.message}</p>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <label htmlFor="account-bank_account_no">Bank Account No*</label>
              <div className="input-group">
                <input onChange={(e) => dispatch({ type: "inputChange", value: e.target.value, field: "accountNo" })} type="text" name="" id="account-bank_account_no" className="form-control" placeholder="Enter Bank account no" required />
              </div>
              {state.formData.accountNo.hasErrors && <p className="text-danger">{state.formData.accountNo.message}</p>}
            </div>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="input-group">
              <input type="checkbox" class="form-input" id="account-renew_my_demat" />
              <label for="account-renew_my_demat">Renew my Demat Account automatically</label>
            </div>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="input-group">
              <input type="checkbox" class="form-input" id="account-open_mero_share" />
              <label for="account-open_mero_share">Open Mero Share Account</label>
            </div>
          </div>

          <div class="col-md-12">
            <p>If you agree for this, the amount for renewal will be deducted from your Gurkhas Finance’s account</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <span onClick={handleSubmit} className="btn btn-primary">
          Next
        </span>
      </div>
    </div>
  )
}

export default withRouter(Account)
