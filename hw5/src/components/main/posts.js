import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Posts = ({ text, addTodo }) => (
<div>
  <div className="small-9 columns">{ text }<input type="button" value="Edit" id="left" onClick={ addTodo } /> <input type="button" value="Leave a comment" id="right" onClick={ addTodo } /></div>
</div>
)

export default connect(null, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(Posts)