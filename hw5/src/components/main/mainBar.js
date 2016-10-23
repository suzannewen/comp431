import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const imgUrl = 'me.jpg'
const divStyle = {
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

export const MainBar = ({  }) => (

<div className="off-canvas position-right reveal-for-large" id="profileInfo" data-off-canvas>
    <div className="row column">
      <img className="thumbnail" style={divStyle} />
      <h5>Suzanne Wen</h5>
      <p><i id="status">"I love COMP431!"</i></p>
      <input type="text" id="update" /><input type="button" value="Update Status" onClick="updateStatus();" /><br /><br /><br />
      <h6><b>YOUR FRIENDS</b></h6>
      <img className="thumbnail" style={divStyle} />
      <h6>Kevin Lee</h6>
      <p><i>"Hungry..."</i></p>
      <img className="thumbnail" style={divStyle} />
      <h6>Katherine Yu</h6>
      <p><i>"Boys are dumb"</i></p>
      <img className="thumbnail" style={divStyle} />
      <h6>Joan Shira</h6>
      <p><i>"Coffee is delicious :)"</i></p><br />
      <input type="text" /><input type="button" value="Add as friend" />
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
)(MainBar)