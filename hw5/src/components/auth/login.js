

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Login = ({  }) => (
    <div class="small-12 large-6 columns">
      <div class="boxes">
        <div class="info" id="login">
        <h3>Log in</h3>
          <p>Account Name <input type="text" id="loginName" /></p>
          <p>Password <input type="password" id="loginPW" /></p>
          <input type="button" value="Log In" onClick="validateLogin();" />
          <input type="button" value="Clear" onClick="clearLogin();" />
        </div>
      </div>
    </div>
)

export default connect(
    (state) => {
        return {
            todoItems: filterTodos(state.todoItems, state.visibilityFilter)
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(Login)