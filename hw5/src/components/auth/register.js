import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Register = ({  }) => (
    <div class="small-12 large-6 columns">
        <div class="boxes">
        <div class="info">
        <h3>Register for an account</h3>
          <form action="main.html" method="get" class="form" id="login"> <!-- GET request -->
            <p>Account Name <input type="text" name="account" required="" pattern="^[A-Za-z][A-Za-z0-9]*" placeholder="alphanumerical, cannot start with number" /></p>
            <p>Display Name <input type="text" name="display" placeholder="optional" /></p>
            <p>Email Address <input type="email" name="email" required="" pattern="[0-9a-zA-Z\-]{1,}.?[0-9a-zA-Z\-]*@[0-9a-zA-Z\-]{1,}.[a-zA-Z\-]{1,}" placeholder="must be valid email" /></p>
            <p>Phone Number <input type="tel" name="phone" required="" pattern="^\d{3}-\d{3}-\d{4}" placeholder="### - ### - ####" /></p>
            <p>Date of Birth (must be at least 18 years of age)<input type="date" id="birthdate" name="birth" required="" /></p>
            <p>Zipcode <input type="tel" name="zipcode" required="" pattern="[0-9]{5}" placeholder="6 digits" /></p>
            <p>Password <input type="password" id="password" name="password" required="" pattern=".{6,}" maxlength="12" placeholder="min 6 char, max 12 char" /></p>
            <p>Password Confirmation <input type="password" id="confirmation" name="confirmation" required="" onChange="return pwMatch();" placeholder="must match above password" /> <i></i></p>
            <input type="hidden" id="timestamp" name="time" />
            <input type="submit" value="Make Account" onClick="return validateDOB();" />
            <input type="reset" value="Clear" />
          </form>
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
)(Register)