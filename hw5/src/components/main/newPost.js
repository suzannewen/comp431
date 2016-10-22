import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const NewPost = ({  }) => (

 <div class="row">
    <div class="small-9 columns">
      <div class="post">
        <input type="text" placeholder="What would you like to post?"><br>
        <input type="file" value="UPLOAD A PICTURE" id="left" onclick=""><input type="button" value="Clear" id="right" onclick="" style="margin-right: 80px"><input type="button" value="Post" id="right" onclick="">
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
)(NewPost)

 