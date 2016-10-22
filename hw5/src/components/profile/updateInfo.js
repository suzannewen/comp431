import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const UpdateInfo = ({  }) => (
  <div class="small-12 large-6 columns">
        <div class="boxes">
          <div class="info">
            <h3>Update Information</h3>
            <p>
              </input type="text" placeholder="name" id="name"></br>
                </input type="text" placeholder="email" id="email"></br>
                </input type="text" placeholder="phone number" id="phone"></br>
                </input type="text" placeholder="zip code" id="zip"></br>
                </input type="text" placeholder="password" id="pw"></br>
              </p>
                </input type="button" value="Update" id="update" onclick="updateInfo();">
          </div>
        </div>
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
)(UpdateInfo)