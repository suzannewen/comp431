import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Posts = ({  }) => (

  <div class="cards">
    <div class="row large-up-4">
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
    </div>
    <div class="row large-up-4">
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
    </div>
    <div class="row large-up-4">
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
      <div class="columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<input type="button" value="Edit" id="left" onclick=""> <input type="button" value="Leave a comment" id="right" onclick=""></div>
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
)(Posts)