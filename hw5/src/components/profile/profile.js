import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Info } from 'info'

export const Profile = ({  }) => (
  <div class="row">
     <Info />
     <UpdateInfo />
  </div>
)

export default connect(
    (state) => {
        return {
            location: location
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(Profile)