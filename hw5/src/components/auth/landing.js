import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Landing = ({  }) => (
  <header class="header">
    <h1 class="title">welcome to rice<small>BOOK</small></h1>
  </header>

  <div class="row">
    <Register />
    <Login />
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
)(Landing)