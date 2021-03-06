import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//allows users to update their information (functionality not added yet)
export const UpdateInfo = ({ }) => (
  <div className="small-12 large-6 columns">
        <div className="boxes">
          <div className="info">
            <h3>Update Information</h3>
            <p>
              <input type="text" placeholder="name" id="name" /><br />
                <input type="text" placeholder="email" id="email" /><br />
                <input type="text" placeholder="phone number" id="phone" /><br />
                <input type="text" placeholder="password" id="pw" /><br />
              </p>
                <input type="button" value="Update" id="update"/>
          </div>
        </div>
      </div>
)

export default connect(
    (state) => {
        return {
            location: state.location
        }
    }
)(UpdateInfo)