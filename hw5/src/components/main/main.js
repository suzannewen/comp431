import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { MainBar } from 'mainBar'
import { NewPost } from 'newPost'
import { Posts } from 'posts'

export const main = ({  }) => (

<div class="off-canvas-wrapper" data-offcanvas>

<MainBar />
<NewPost />
<Posts />

</div>

)

export default connect(
    (state) => {
        return {
            location: location
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(ToDos)