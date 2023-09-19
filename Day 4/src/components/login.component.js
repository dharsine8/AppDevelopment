import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      
      <form>
        <h3>Login </h3>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

         <center> <button type="submit" class="btn btn-primary">
            Submit
          </button></center>
        
      </form>
    )
  }
}
