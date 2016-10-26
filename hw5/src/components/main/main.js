import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MainBar from './mainBar'
import NewPost from './newPost'
import Posts from './posts'

export const Main = ({ articles }) => (

<div className="off-canvas-wrapper" data-offcanvas>
  <MainBar />
  <NewPost />

  <div className="cards">
    <div className="row">
        {articles.map(({ _id, text }) => (
          <Posts key={ _id } text={ text } />
        ))}
    </div>
  </div>
</div>

)

export default connect(
    (state) => {
        return {
            location: state.location,
            articles: state.articles
        }
    },
    (dispatch) => {
        return {
            placeholder:  () => dispatch({ type: "NAVIGATION"})
        }
    }
)(Main)
