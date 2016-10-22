import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const MainBar = ({  }) => (

<div class="off-canvas position-right reveal-for-large" id="profileInfo" data-off-canvas>
    <div class="row column">
      <img class="thumbnail" style="background-image: url('me.jpg'); background-size: cover;  background-repeat: no-repeat;">
      <h5>Suzanne Wen</h5>
      <p><i id="status">"I love COMP431!"</i></p>
      <input type="text" id="update"><input type="button" value="Update Status" onclick="updateStatus();"><br><br><br>
      <h6><b>YOUR FRIENDS</b></h6>
      <img class="thumbnail" style="background-image: url('kevin.jpg'); background-size: cover;  background-repeat: no-repeat;">
      <h6>Kevin Lee</h6>
      <p><i>"Hungry..."</i></p>
      <img class="thumbnail" style="background-image: url('katherine.jpg'); background-size: cover;  background-repeat: no-repeat;">
      <h6>Katherine Yu</h6>
      <p><i>"Boys are dumb"</i></p>
      <img class="thumbnail" style="background-image: url('joan.jpg'); background-size: cover;  background-repeat: no-repeat;">
      <h6>Joan Shira</h6>
      <p><i>"Coffee is delicious :)"</i></p><br>
      <input type="text"><input type="button" value="Add as friend">
    </div>
  </div>

)

export default connect(
    (state) => {
        return {
            location: location;
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(MainBar)