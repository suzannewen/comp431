import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const divStyle = {
    marginRight: 80
}

export const NewPost = ({ addTodo }) => (

 <div className="row">
    <div className="small-9 columns">
      <div className="post">
        <input type="text" placeholder="What would you like to post?" /><br />
        <input type="file" value="UPLOAD A PICTURE" id="left" onClick={ addTodo } /><input type="button" value="Clear" id="right" onClick={ addTodo } style={divStyle} /><input type="button" value="Post" id="right" onClick={ addTodo } />
      </div>
    </div>
  </div>

)

export default connect(null, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(NewPost)

 