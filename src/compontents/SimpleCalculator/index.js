import {Component} from 'react'
import './index.css'

class SimpleCalculator extends Component {
  state = {
    amount: '',
    interest: '',
    fromDate: '',
    toDate: '',
    isResultShowing: false,
    result: 0,
  }

  calculateRate = () => {
    const {amount, interest, fromDate, toDate} = this.state
    const selectedFromDate = new Date(fromDate)
    const selectedToDate = new Date(toDate)
    const days = Math.round(
      (selectedToDate - selectedFromDate) / (1000 * 3600 * 24),
    )
    const simpleInterest = ((amount * days * interest) / 100) * (1 / 365)
    const convertInt = Number(amount) + Number(simpleInterest.toFixed(2))
    this.setState({isResultShowing: true, result: convertInt})
  }

  readFormData = event => {
    event.preventDefault()
    const {amount, interest, fromDate, toDate} = this.state
    if (amount !== '' && interest !== '' && fromDate !== '' && toDate !== '') {
      if (amount >= 0 && interest >= 0) {
        this.calculateRate()
      }
    }
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getInterest = event => {
    this.setState({interest: event.target.value})
  }

  getFromDate = event => {
    this.setState({fromDate: event.target.value})
  }

  getToDate = event => {
    this.setState({toDate: event.target.value})
  }

  render() {
    const {isResultShowing, result} = this.state
    return (
      <div className="bgContainer">
        <form className="formContainer" onSubmit={this.readFormData}>
          <h1 className="MainHeading">Simple Interest Calculator</h1>
          <div className="eachInputDiv">
            <label htmlFor="principal amount" className="labelItem">
              Principal Amount
            </label>
            <br />
            <input
              type="number"
              className="eachInput"
              placeholder="Enter Amount"
              id="principal amount"
              onChange={this.getAmount}
            />
          </div>
          <div className="eachInputDiv">
            <label htmlFor="interest rate" className="labelItem">
              Interest Rate
            </label>
            <br />
            <input
              type="number"
              className="eachInput"
              placeholder="Enter interest"
              id="interest rate"
              onChange={this.getInterest}
            />
          </div>
          <div className="eachInputDiv">
            <label htmlFor="from date" className="labelItem">
              From Date
            </label>
            <br />
            <input
              type="date"
              className="eachInput"
              placeholder="Enter from date"
              id="from date"
              onChange={this.getFromDate}
            />
          </div>
          <div className="eachInputDiv">
            <label htmlFor="to date" className="labelItem">
              To Date
            </label>
            <br />
            <input
              type="date"
              className="eachInput"
              placeholder="Enter to date"
              id="to date"
              onChange={this.getToDate}
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="calculateButton">
              Calculate Simple Interest
            </button>
          </div>
          <h1 className="simpleIntrestResult">
            Simple Interest : {isResultShowing && <span>{result} /-</span>}
          </h1>
        </form>
      </div>
    )
  }
}

export default SimpleCalculator
