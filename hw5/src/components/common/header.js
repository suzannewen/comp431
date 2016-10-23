import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Header = ({ navigate }) => (

<header className="header">
    <h1 className="title">rice<small>BOOK</small></h1>
    <ul className="nav">
      <li><input type="text" className="search" placeholder="Search" /></li>
      <li><h4  type="button" onClick={ () => { navigate('MAIN_PAGE')} } >FEED </h4></li>
      <li><h4 type="button" onClick={ () => { navigate('PROFILE_PAGE')} }>PROFILE </h4></li>
      <li><h4 type="button" onClick={() => { navigate('LANDING_PAGE')} }>LOGOUT</h4></li>
    </ul>
  </header>

)

export default connect(
    (state) => {
        return {
            location: state.location
        }
    },
    (dispatch) => {
        return {
            navigate:  (place) => dispatch({ type: 'NAVIGATION', location: place})
        }
    }
)(Header)