import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Posts = ({ addTodo }) => (
  <div className="cards">
    <div className="row large-up-4">
      <div className="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onClick={ addTodo } /> <input type="button" value="Leave a comment" id="right" onClick={ addTodo } /></div>
      <div className="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onClick={ addTodo }/> <input type="button" value="Leave a comment" id="right" onClick={ addTodo } /></div>
      <div className="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onClick={ addTodo } /> <input type="button" value="Leave a comment" id="right" onClick={ addTodo } /></div>
    </div>
  </div>
)

export default connect(null, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(Posts)