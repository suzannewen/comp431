import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { editPost }  from '../actions/postAction'

// one post div generated for each article
export const Posts = ({ text, id, editPost }) => {
  let content

  const _editPost = (id) => {
    editPost(content.innerHTML, id)
  }

  return (
  <div>
    <div className="small-9 columns" id="post"><div contentEditable="true" ref={ (node) => content = node }>{ text }</div><input type="button" value="Edit" id="left" onClick={ () => {_editPost(id)} }/> <input type="button" value="Leave a comment" id="right" /></div>
  </div>
  )
}

export default connect(null,
  (dispatch) => {
    return {
      editPost: (content, id) => editPost(content, id)(dispatch)
    }
  })(Posts)