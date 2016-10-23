import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Login = ({ login }) => (
    <div className="small-12 large-6 columns">
      <div className="boxes">
        <div className="info" id="login">
        <h3>Log in</h3>
          <p>Account Name <input type="text" id="loginName" /></p>
          <p>Password <input type="password" id="loginPW" /></p>
          <input type="button" value="Log In" onClick={login} />
          <input type="button" value="Clear" />
        </div>
      </div>
    </div>
)

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(
    (state) => {
        return {
            location: state.location
        }
    },
    (dispatch) => {
        return {
            login: () => dispatch({ type: 'NAVIGATION',  location: 'MAIN_PAGE' })
        }
    }
)(Login)