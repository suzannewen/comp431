import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { resource } from './authActions'

export const Login = ({ authLogin }) => (
    <div className="small-12 large-6 columns">
      <div className="boxes">
        <div className="info" id="login">
        <h3>Log in</h3>
          <p>Account Name <input type="text" id="loginName" /></p>
          <p>Password <input type="password" id="loginPW" /></p>
          <input type="button" value="Log In" onClick={ authLogin } />
          <input type="button" value="Clear" />
        </div>
      </div>
    </div>
)

Login.propTypes = {
    authLogin: PropTypes.func.isRequired
}

export default connect(null,
    (dispatch) => {
        return {
            authLogin: () => {
              const username = document.querySelector("#loginName").value
              const password = document.querySelector("#loginPW").value
              let valid = false

              return resource('POST', 'login', { username, password })
                // .then(r => resource('GET', 'headlines'))
                .then(r => {
                  valid = true
                  dispatch({ type: 'NAVIGATION',  location: 'MAIN_PAGE' })
                })
                .catch( () => {if (valid === false) {alert ("Your username or password is incorrect.")} } )
          }     
        }
    }
)(Login)