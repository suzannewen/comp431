import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Footer = () => (

  <footer class="footer">
    <div class="row">
      <div class="small-12 columns">Suzanne Wen © 2016</div>
    </div>
  </footer>

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