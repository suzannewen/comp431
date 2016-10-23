import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MainBar from './mainBar'
import NewPost from './newPost'
import Posts from './posts'

export const Main = ({  }) => (

<div className="off-canvas-wrapper" data-offcanvas>
  <MainBar />
  <NewPost />
  <Posts />
</div>

)

export default connect(
    (state) => {
        return {
            location: state.location
        }
    },
    (dispatch) => {
        return {
            placeholder:  () => dispatch({ type: "NAVIGATION"})
        }
    }
)(Main)
