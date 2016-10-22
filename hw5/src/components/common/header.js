import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Header = () => (

<header class="header">
    <h1 class="title">rice<small>BOOK</small></h1>
    <ul class="nav">
      <li><input type="text" class="search" placeholder="Search"></i></li>
      <li><a><u>FEED</u></a></li>
      <li><a href="profile.html">PROFILE</a></li>
      <li><a href="index.html">LOGOUT</a></li>
    </ul>
  </header>

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
)(Header)