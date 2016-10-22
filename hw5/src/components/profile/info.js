import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Info = ({  }) => (
    <div class="small-12 large-6 columns">
      <div class="boxes">
        <div class="profilePic" style="background-image: url('me.jpg')"></div></input type="button" value="Upload profile picture">
        <div class="info">
          <h4 id="nameCurrent">Suzanne Wen</h4>
          <i>I love COMP 431!</i>
          <p>
            <i class="fi-mail"></i> <nobr id="emailCurrent">suz.wen@yahoo.com</nobr></br>
            <i class="fi-telephone"></i> <nobr id="phoneCurrent">(254)-592-5421</nobr></br>
             <i class="fi-home"></i> <nobr id="zipCurrent">76016</nobr></br>
            </p>
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
)(Info)