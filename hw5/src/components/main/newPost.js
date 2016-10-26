import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const NewPost = ({ }) => (

 <div className="row">
    <div className="small-9 columns">
      <div className="post">
        <input type="text" placeholder="What would you like to post?" /><br />
        <input type="file" value="UPLOAD A PICTURE" id="left"/><input type="button" value="Clear" id="right" /><input type="button" value="Post" id="right"/>
      </div>
    </div>
  </div>

)

export default connect(null, null
)(NewPost)

 