import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Info from './info'
import UpdateInfo from './updateInfo'

export const Profile = ({  }) => (
  <div className="row">
     <Info />
     <UpdateInfo />
  </div>
)

export default connect(
    (state) => {
        return {
            location: state.location
        }
    },
    (dispatch) => {
        return {
            placeholder:  () => dispatch({ type: "NAVIGATION"})
        }
    }
)(Profile)